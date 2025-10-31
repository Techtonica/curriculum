# Design restaurant recommender system


from importlib.machinery import SourceFileLoader

helper = SourceFileLoader("Heap.py", "./Heap.py").load_module()

# Note: need to add ratings to restaurants before you calculate average rating.

# throw in API.
# ratings = {restaurant_id: <rating>}


class RestaurantRecommender(object):

    def __init__(self):
        self.users = {}
        self.restaurants = {}
        self.tags = {}

    def add_user(self, user_id, name):
        """
        Add user to the system if they do not already exist.
        """
        if user_id in self.users: return
        self.users[user_id] = User(user_id, name)

    def get_user(self, user_id):
        """
        Get user from the system if they exist.
        """
        if user_id not in self.users: return
        return self.users[user_id]

    def add_restaurant(self, restaurant_id, name):
        """
        Add a restaurant to the system if it does not exist.
        """
        if restaurant_id not in self.restaurants: self.restaurants[restaurant_id] = Restaurant(restaurant_id, name)

    def add_restaurant_to_tag(self, restaurant_id, name, tag):
        """
        Add a restaurant to a tag, add the tag to the restaurant.
        """
        self.add_restaurant(restaurant_id, name)
        self.add_tag(tag)

        restaurant = self.get_restaurant(restaurant_id)
        tag = self.get_tag(tag)

        restaurant.add_tag(tag)
        tag.add_restaurant(restaurant)

    def get_restaurant(self, restaurant_id):
        """
        Get restaurant from the system if it exists.
        """
        if restaurant_id not in self.restaurants: return
        return self.restaurants[restaurant_id]

    def add_tag(self, tag):
        """
        Add tag to tags if it does not already exist.
        """
        if tag not in self.tags: self.tags[tag] = Tag(tag)

    def get_tag(self, tag):
        """
        Get tag if it exists
        """
        if tag not in self.tags: return
        return self.tags[tag]

    def validate_rating(self, score):
        """
        Check if score is within appropriate range.
        """
        if score < 0 or score > 10: return None
        return score

    def add_rating(self, user_id, restaurant_id, score):
        """
        Add rating to the system
        """

        if self.validate_rating(score) is None: return

        # add users and restaurants that do not exist
        if user_id not in self.users: self.add_user(user_id)
        if restaurant_id not in self.restaurants: self.add_restaurant(restaurant_id)


        # update average restaurant rating and user's ratings
        user = self.get_user(user_id)
        user.add_rating(restaurant_id, score)
        restaurant = self.restaurants[restaurant_id]
        restaurant.add_rating(score)

        # update user preferences based on the tags.
        if score > 7:
            user.add_preference(restaurant.tags)

    def reduce(self, ratings):
        """
        Remove ratings from heap that are None.
        """
        ratings_copy = ratings[::]
        for index, item in enumerate(ratings_copy):
            restaurant, score = ratings_copy[index]
            if score is None: ratings.remove(item)

        return ratings

    def prioritize(self, ratings):
        """
        Prioritize restaurants
        """
        filtered_ratings = self.reduce(list(ratings.items()))
        heap = helper.Heap("max")
        heap.storage = filtered_ratings
        heap.heapify()
        return heap

    def filter_restaurants(self, tag_restaurants, seen_restaurants):
        """
        Only considering restaurants that are not seen, and removing those that are.
        """
        for info in tag_restaurants[::]:
            restaurant = info[0]
            if restaurant not in seen_restaurants:
                seen_restaurants.add(restaurant)
            else:
                tag_restaurants.remove(info)
        return tag_restaurants

    def filter_tags(self, tags, seen_restaurants):
        """
        Adding top prioritized restaurants from each tag.
        """
        top_restaurants = []
        for tag in tags:
            ratings_heap = self.prioritize(tag.ratings)
            tag_restaurants = self.filter_restaurants(tag.get_top_restaurants(ratings_heap), seen_restaurants)
            if len(tag_restaurants) > 0:
                top_restaurants.append(tag_restaurants)
        return top_restaurants

    def get_top_average_restaurants(self, number_of_restaurants=5, min_score=5):
        # create new dict with restaurant id as key, and value is average rating. 
        ratings = {r_id: self.restaurants[r_id].average_score for r_id in self.restaurants}

        # put it into a heap.
        candidates = self.prioritize(ratings)

        result = []
        counter = number_of_restaurants
        while counter > 0 and candidates.size() > 0:
            id, score = candidates.remove_peak()
            if score > min_score:
                result.append(id)
            counter -= 1
        return result

    def give_top_five(self, user_id):
        # check for user_id in system
        user = self.get_user(user_id)
        if user is None: return

        # initialize seen_restaurants; add all restaurants a user has seen
        seen_restaurants = set()
        for restaurant in user.ratings:
            seen_restaurants.add(restaurant)

        # ratings for a user. Going to replace with calling another function that would
        # .. get the top five
        if len(user.ratings) == 0: return []

        # prioritize restaurants
        user_heap = self.prioritize(user.ratings)

        # get top five restaurants of users
        highest_rated = user.get_top_five(user_heap)

        # iterate through restaurants in the array
        if len(highest_rated) == 0: return self.get_top_average_restaurants()

        # get the top rated restaurants that are a part of each category.
        top_tags = []
        for rated in highest_rated:
            if rated not in self.restaurants: continue
            restaurant = self.restaurants[rated]
            top_tags = restaurant.tags

        # top candidates
        top_candidates = self.filter_tags(top_tags, seen_restaurants)

        # place the top candidates in a heap and perform bubble down operations.
        max_heap = helper.Heap("max")
        for index in range(len(top_candidates)):
            top_candidate_list = top_candidates[index]
            id, score = top_candidate_list[-1]
            max_heap.insert(
                [id,  score,  index, len(top_candidate_list) - 1])

        count = 10
        result = []

        while count > 0 and max_heap.size() > 0:
            id, score, outer_index, inner_index = max_heap.remove_peak()
            result.append(id)
            if inner_index > 0:
                next_id, next_score = top_candidates[outer_index][inner_index - 1]
                max_heap.insert([next_id, next_score, outer_index, inner_index - 1])
            count -= 1

        return result


class Tag(object):
    def __init__(self, name):
        self.name = name
        self.ratings = {}

    def __repr__(self):
        return '<{}>'.format(self.name)

    def add_restaurant(self, restaurant):
        self.ratings[restaurant.id] = restaurant.average_score

    def get_top_restaurants(self, heap):
        result = []
        counter = 5
        while counter > 0 and heap.size() > 0:
            id, score = heap.remove_peak()
            if score is not None and score > 5:
                result.append((id, score))
            counter -= 1
        return result


class User(object):
    def __init__(self, id, name):
        self.id = id
        self.name = name
        self.ratings = {}
        self.preferences = set()

    def add_rating(self, restaurant_id, score):
        # using a dictionary to easily update ratings.
        self.ratings[restaurant_id] = score

    def add_preference(self, tags):
        for tag in tags: self.preferences.add(tag)

    def get_top_five(self, heap):
        result = []
        counter = 5
        while counter > 0 and heap.size() > 0:
            id, score = heap.remove_peak()
            if score > 5:
                result.append(id)
            counter -= 1
        return result


class Restaurant(object):
    def __init__(self, id, name):
        self.id = id
        self.name = name
        self.num_of_ratings = 0
        self.average_score = None
        self.tags = set()

    def __repr__(self):
        return "<{} - {}>".format(self.id, self.name)

    def add_rating(self, score):
        self.num_of_ratings += 1
        if self.average_score is None: self.average_score = 0
        self.average_score = ((self.average_score + score)/self.num_of_ratings)

    def add_tag(self, tag):
        self.tags.add(tag)



############### TESTS ##########


# 1: Taco Bell
# 2: Burger King
# 3: Carl's Jr
# 4: Panda Express
# 5: Five Guys
# 6: Juan's Flying Burrito
# 7: Apple Bee's
# 8: KFC
# 9: Subway
# 10: In 'N Out
# 11: French Laundry
# 12: Super Duper Burger
# 13: Wendy's
# 14: Chick Filet
# 15: iHop

# initialize Restaurant recommender
r = RestaurantRecommender()

# Add Users
r.add_user(1, "Joey")
r.add_user(2, "Puneet")
r.add_user(3, "Yeisy")
r.add_user(4, "Duy")
r.add_user(5, "Rambabu")
r.add_user(6, "Chitra")
r.add_user(7, "Padmini")
r.add_user(8, "Amitt")
r.add_user(9, "Jacquie")
r.add_user(10, "Gunitika")

# add Restaurants
r.add_restaurant(1, "Taco Bell")
r.add_restaurant(2, "Burger King")
r.add_restaurant(3, "Carl's Jr")
r.add_restaurant(4, "Panda Express")
r.add_restaurant(5, "ByChloe")
r.add_restaurant(6, "Juan's Flying Burrito")
r.add_restaurant(7, "Apple Bee's")
r.add_restaurant(8, "KFC")
r.add_restaurant(9, "Subway")
r.add_restaurant(10, "In 'N Out")
r.add_restaurant(11, "Gracias Madre")
r.add_restaurant(12, "Super Duper Burger")
r.add_restaurant(13, "Wendy's")
r.add_restaurant(14, "Pizzeria Delfina")
r.add_restaurant(15, "iHop")

# Add Tags
r.add_tag("24 Hours Open")
r.add_tag("Expensive")
r.add_tag("Inexpensive")
r.add_tag("Moderate")
r.add_tag("Vegan")
r.add_tag("Mexican")
r.add_tag("American")
r.add_tag("Chinese")
r.add_tag("Italian")


# restaurants are rated in order.

# Joey has 8 ratings
# Puneet has 2 ratings
# Yeisy has 10 ratings --> 5 restaurants that are left.
# Dan has 5 ratings
# Keith has 1 rating
# Stephen has 15 ratings --> no restaurants.



# Add Ratings

# Joey's Ratings

Joey = r.users[1]

r.add_rating(1, 8, 3)
r.add_rating(1, 7, 4)
r.add_rating(1, 6, 5)
r.add_rating(1, 5, 6)
r.add_rating(1, 4, 7)
r.add_rating(1, 3, 8)
r.add_rating(1, 2, 9)
r.add_rating(1, 1, 10)

# 3 --> 8
#

# print("Joey's Top Rated: ", Joey.get_top_five()) # [1, 2, 3, 4, 5]
# r.give_top_five(1)

# Puneet's ratings

Puneet = r.users[2]

r.add_rating(2, 2, 10)
r.add_rating(2, 1, 5)

# print(Puneet.get_top_five()) # [2, 1]

r.add_rating(2, 2, 1)
r.add_rating(2, 1, 10)

# print("Puneet's top five: ", Puneet.get_top_five()) # [1, 2]

# r.give_top_five(2)

# []

# Yeisy's

Yeisy = r.users[3]

r.add_rating(3, 1, 5)
r.add_rating(3, 2, 5)
r.add_rating(3, 3, 5)
r.add_rating(3, 4, 5)
r.add_rating(3, 5, 5)
r.add_rating(3, 6, 5)
r.add_rating(3, 7, 5)
r.add_rating(3, 8, 5)
r.add_rating(3, 9, 5)
r.add_rating(3, 10, 5)

# print("Yeisy's top five: ", Yeisy.get_top_five()) # [1, 2, 3, 4, 5]
# r.give_top_five(3)
# In arbitrary order [11, 12, 13, 14, 15]


Duy = r.users[4]

r.add_rating(4, 1, 1)
r.add_rating(4, 2, 2)
r.add_rating(4, 3, 3)
r.add_rating(4, 4, 2)
r.add_rating(4, 5, 10)
r.add_rating(4, 6, 1.1)
r.add_rating(4, 6, 5)
r.add_rating(4, 7, 2)
r.add_rating(4, 8, 2)
r.add_rating(4, 9, 8)
r.add_rating(4, 10, 2)
r.add_rating(4, 11, 7)
r.add_rating(4, 12, 4)
r.add_rating(4, 13, 2)
r.add_rating(4, 14, 7)
r.add_rating(4, 15, 9)
r.give_top_five(4) # No recommendations





# TEST EVERYTHING
r1 = r.restaurants[1]
print("{} - {}".format(r1, r1.average_score))
r2 = r.restaurants[2]
print("{} - {}".format(r2, r2.average_score))
r3 = r.restaurants[3]
print("{} - {}".format(r3, r3.average_score))
r4 = r.restaurants[4]
print("{} - {}".format(r4, r4.average_score))
r5 = r.restaurants[5]
print("{} - {}".format(r5, r5.average_score))
r6 = r.restaurants[6]
print("{} - {}".format(r6, r6.average_score))
r7 = r.restaurants[7]
print("{} - {}".format(r7, r7.average_score))
r8 = r.restaurants[8]
print("{} - {}".format(r8, r8.average_score))
r9 = r.restaurants[9]
print("{} - {}".format(r9, r9.average_score))
r10 = r.restaurants[10]
print("{} - {}".format(r10, r10.average_score))
r11 = r.restaurants[11]
print("{} - {}".format(r11, r11.average_score))
r12 = r.restaurants[12]
print("{} - {}".format(r12, r12.average_score))
r13 = r.restaurants[13]
print("{} - {}".format(r13, r13.average_score))
r14 = r.restaurants[14]
print("{} - {}".format(r14, r14.average_score))
r15 = r.restaurants[15]
print("{} - {}".format(r15, r15.average_score))


# Giving the top five


# add Restaurants
r.add_restaurant(1, "Taco Bell")
r.add_restaurant(2, "Burger King")
r.add_restaurant(3, "Carl's Jr")
r.add_restaurant(4, "Panda Express")
r.add_restaurant(5, "ByChloe")
r.add_restaurant(6, "Juan's Flying Burrito", )
r.add_restaurant(7, "Apple Bee's", )
r.add_restaurant(8, "KFC", )
r.add_restaurant(9, "Subway")
r.add_restaurant(10, "In 'N Out")
r.add_restaurant(11, "Gracias Madre", )
r.add_restaurant(12, "Super Duper Burger", )
r.add_restaurant(13, "Wendy's", )
r.add_restaurant(14, "Pizzeria Delfina")
r.add_restaurant(15, "iHop", )

tag1 = r.tags["24 Hours Open"]
r.add_restaurant_to_tag(1, "Taco Bell", "24 Hours open")
r.add_restaurant_to_tag(1, "Taco Bell", "Inexpensive")
r.add_restaurant_to_tag(1, "Taco Bell", "Mexican")

r.add_restaurant_to_tag(2, "Burger King", "Inexpensive")
r.add_restaurant_to_tag(2, "Burger King", "American")

r.add_restaurant_to_tag(3, "Carl's Jr", "24 Hours open")
r.add_restaurant_to_tag(3, "Carl's Jr", "Inexpensive")
r.add_restaurant_to_tag(3, "Carl's Jr", "American")


r.add_restaurant_to_tag(4, "Panda Express", "Inexpensive")
r.add_restaurant_to_tag(4, "Panda Express", "Chinese")

r.add_restaurant_to_tag(5, "ByChloe", "Moderate")
r.add_restaurant_to_tag(5, "ByChloe", "American")
r.add_restaurant_to_tag(5, "ByChloe", "Vegan")

r.add_restaurant_to_tag(6, "Juan's Flying Burrito", "Moderate")
r.add_restaurant_to_tag(6, "Juan's Flying Burrito", "Mexican")

r.add_restaurant_to_tag(7, "Apple Bee's", "Inexpensive")
r.add_restaurant_to_tag(7, "Apple Bee's", "American")
r.add_restaurant_to_tag(7, "Apple Bee's", "24 Hours Open")

r.add_restaurant_to_tag(8, "KFC", "Inexpensive")
r.add_restaurant_to_tag(8, "KFC", "American")

r.add_restaurant_to_tag(9, "Subway", "Inexpensive")
r.add_restaurant_to_tag(9, "Subway", "American")

r.add_restaurant_to_tag(10, "In 'N Out", "Moderate")
r.add_restaurant_to_tag(10, "In 'N Out", "American")

r.add_restaurant_to_tag(11, "Gracias Madre", "Expensive")
r.add_restaurant_to_tag(11, "Gracias Madre", "Mexican")
r.add_restaurant_to_tag(11, "Gracias Madre", "Vegan")

r.add_restaurant_to_tag(12, "Super Duper Burger", "Moderate")
r.add_restaurant_to_tag(12, "Super Duper Burger", "American")

r.add_restaurant_to_tag(13, "Wendy's", "Inexpensive")
r.add_restaurant_to_tag(13, "Wendy's", "American")

r.add_restaurant_to_tag(14, "Pizzeria Delfina", "Expensive")
r.add_restaurant_to_tag(14, "Pizzeria Delfina", "Italian")

r.add_restaurant_to_tag(15, "iHop", "Inexpensive")
r.add_restaurant_to_tag(15, "iHop", "American")


print(r.give_top_five(1))
print(r.give_top_five(4))
print(r.give_top_five(3))
print(r.give_top_five(2))


print("Top Average Restaurants: ", r.get_top_average_restaurants())



# Rate top 10 restaurants:
# [iHop, Pizzeria Delfina, ]

# Tie situation:

# if two restaurants have the same score, base it off of whichever one
# ... has the higher rating.

# [iHop, Gracias Madre, Pizzeria Delfina, Subway, ByChloe]
#


