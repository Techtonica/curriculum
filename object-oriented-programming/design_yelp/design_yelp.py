# Design restaurant recommender system

# 1) users to post ratings for restaurants
# 2) add users
# 3) add restaurants
# 4) user get top five recommended restaurants
# 5) blind system


# giving a rating?

# User A --> Pizzeria Delfina, 5
#        --> Restaurant B, 6

# rating: 1 to 10; integer


# USER REQUIREMENTS
# Restaurant Recommender class
# need to have users; user class
# need to have restaurants; restaurant class
# need to have ratings; live on the user class.
# tags --> hard coded tags.

# tags = {"Open Late": set()}

# Puneet =  {restaurant_id<int>: score<int>}


# Yeisy = {}


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

# user: 1
# ratings = {1: 3, 2: 5, 3: 6, 4: 2, 5: 8, 6: 7}

# {"24 Hours Open": set(1, 2, 3, 6), "Inexpensive": set(4, 5, 6, 7, 8), "Moderate": set(9, 10), "Expensive": set(11, 12, 6), "Vegan": set(13, 14, 15)}


# {1: 3, 2: 5, 3: 6, 4: 2, 5: 8, 6: 7} ==> sort: O(N LOG N)
# Max Heap
#

#                                             i
# [(1, 3), (2, 5), (3, 6), (4, 2), (5, 8), (6, 7)]

#
#


# top five restaurant IDs [5, 6, 3, 2, 4]


# top 5 restaurants --> 3, 5, 6, 2, 1
# user's top five rated restaurants


# restaurant_ids = [3, 5, 6, 2, 1]


# Recommending the users restaurant based on meta data.
# noticing pattenr

import heapq

class RestaurantRecommender(object):

    def __init__(self):
        self.users = {}
        self.restaurants = {}
        self.tags = {}
        self.ratings = {}

    def add_user(self, user_id, name=None):
        if user_id in self.users: return
        self.users[user_id] = User(user_id, name)

    def get_user(self, user_id):
        if user_id not in self.users: return
        return self.users[user_id]

    def add_restaurant(self, restaurant_id, name=None):
        if restaurant_id not in self.restaurants: self.restaurants[restaurant_id] = Restaurant(restaurant_id, name)

    def add_restaurant_to_tag(self, restaurant_id, tag):
        self.add_restaurant(restaurant_id)
        self.add_tag(tag)

        restaurant = self.get_restaurant(restaurant_id)
        tag = self.get_tag(tag)

        restaurant.add_tag(tag)
        tag.add_restaurant(restaurant)

    def get_restaurant(self, restaurant_id):
        if restaurant_id not in self.restaurants: return
        return self.restaurants[restaurant_id]


    def get_average_rating(self, restaurant_id):
        restaurant = self.get_restaurant(restaurant_id)
        if restaurant: print(restaurant.calculate_average())

    def add_tag(self, tag):
        if tag not in self.tags: self.tags[tag] = Tag(tag)

    def get_tag(self, tag):
        if tag not in self.tags: return
        return self.tags[tag]

    def validate_rating(self, score):
        if score < 0 or score > 10: return None
        return score

    def add_rating(self, user_id, restaurant_id, value):

        if self.validate_rating(value) is None: return

        # add users and restaurants that do not exist
        if user_id not in self.users: self.add_user(user_id)
        if restaurant_id not in self.restaurants: self.add_restaurant(restaurant_id)

        # Create a new rating
        rating = Rating(user_id, restaurant_id, value)

        # update average restaurant rating and user's ratings
        user = self.get_user(user_id)
        user.add_rating(restaurant_id, rating)
        restaurant = self.restaurants[restaurant_id]
        restaurant.add_rating(user_id, rating.value)

    def filter_by(self, tag):
        tag = self.tags[tag]
        return tag.restaurants

    def give_top_five(self, user_id):

        # check for user_id in system
        user = self.get_user(user_id)
        if user is None: return

        # initialize seen_restaurants; add all restaurants a user has seen
        seen_restaurants = set()
        for restaurant in self.ratings:
            seen_restaurants.add(restaurant)

        # initialize seen_tags to be empty; only add if all restaurants in tag have been added to heap
        seen_tags = set()

        # get top five restaurants of user

        # seen tags
        # user restaurants
        # get top 5 restaurants from user
        # iterate through restaurants in the array
        # for each restauraunt, look through tags
        # collect restauraunts from that tag
        # remove peak from each heap of restaurants
        # add it to result


class Tag(object):
    def __init__(self, name):
        self.name = name
        self.ratings = []
        self.restaurants = set()

    def add_restaurant(self, restaurant):
        if restaurant not in self.ratings:
            # insert into ratings heap.
            pass


class User(object):
    def __init__(self, id, name=None):
        self.id = id
        self.name = name
        self.ratings = {}

    def add_rating(self, restaurant_id, rating):
        self.ratings[restaurant_id] = rating

    def get_top_five(self):
        pass


class Rating(object):
    def __init__(self, user_id, restaurant_id, value):
        self.id = id(self)
        self.user_id = user_id
        self.restaurant_id = restaurant_id
        self.value = value


class Restaurant(object):
    def __init__(self, id, name=None):
        self.id = id
        self.name = name
        self.ratings = {}
        self.tags = set()

    def add_rating(self, user_id, rating):
        self.ratings[user_id] = rating

    def calculate_average(self):
        return sum(self.ratings.values())/len(self.ratings)

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
r.add_user(1)
r.add_user(2)
r.add_user(3)
r.add_user(4)
r.add_user(5)
r.add_user(6)
r.add_user(7)
r.add_user(8)
r.add_user(9)
r.add_user(10)

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

tag1 = r.tags["24 Hours Open"]
r.add_restaurant_to_tag(1, "24 Hours open")
r.add_restaurant_to_tag(1, "Inexpensive")
r.add_restaurant_to_tag(1, "Mexican")

r.add_restaurant_to_tag(2, "Inexpensive")
r.add_restaurant_to_tag(2, "American")

r.add_restaurant_to_tag(3, "24 Hours open")
r.add_restaurant_to_tag(3, "Inexpensive")
r.add_restaurant_to_tag(3, "American")

r.add_restaurant_to_tag(4, "Inexpensive")
r.add_restaurant_to_tag(4, "Chinese")

r.add_restaurant_to_tag(5, "Moderate")
r.add_restaurant_to_tag(5, "American")
r.add_restaurant_to_tag(5, "Vegan")

r.add_restaurant_to_tag(6, "Moderate")
r.add_restaurant_to_tag(6, "Mexican")

r.add_restaurant_to_tag(7, "Inexpensive")
r.add_restaurant_to_tag(7, "American")
r.add_restaurant_to_tag(7, "24 Hours Open")

r.add_restaurant_to_tag(8, "Inexpensive")
r.add_restaurant_to_tag(8, "American")

r.add_restaurant_to_tag(9, "Inexpensive")
r.add_restaurant_to_tag(9, "American")

r.add_restaurant_to_tag(10, "Moderate")
r.add_restaurant_to_tag(10, "American")

r.add_restaurant_to_tag(11, "Expensive")
r.add_restaurant_to_tag(11, "Mexican")
r.add_restaurant_to_tag(11, "Vegan")

r.add_restaurant_to_tag(12, "Moderate")
r.add_restaurant_to_tag(12, "American")

r.add_restaurant_to_tag(13, "Inexpensive")
r.add_restaurant_to_tag(13, "American")

r.add_restaurant_to_tag(14, "Expensive")
r.add_restaurant_to_tag(14, "Italian")

r.add_restaurant_to_tag(15, "Inexpensive")
r.add_restaurant_to_tag(15, "American")


# Add Restaurants to Tags:
#


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

# print(Joey.get_top_five())
# r.give_top_five(1)

# Puneet's ratings

Puneet = r.users[2]

r.add_rating(2, 2, 10)
r.add_rating(2, 1, 5)

# print(Puneet.get_top_five())

r.add_rating(2, 2, 1)
r.add_rating(2, 1, 10)

# print(Puneet.get_top_five())

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
# r.give_top_five(3)
# In arbitrary order [11, 12, 13, 14, 15]


Malavika = r.users[4]
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
# r.give_top_five(4) # No recommendations




# TEST EVERYTHING
r.get_average_rating(1)
r.get_average_rating(2)
r.get_average_rating(3)
r.get_average_rating(4)
r.get_average_rating(5)
r.get_average_rating(6)
r.get_average_rating(7)
r.get_average_rating(8)
r.get_average_rating(9)
r.get_average_rating(10)
r.get_average_rating(11)
r.get_average_rating(12)
r.get_average_rating(13)
r.get_average_rating(14)
r.get_average_rating(15)



# Giving the top five
#




