"""
Binary Heap Class
"""

class Heap:

    def __init__(self, type='min'):
        self.storage = []
        self.type = type


    def compare(self, a, b):
        if self.type == 'max':
            return self.storage[a][1] > self.storage[b][1]
        else:
            return self.storage[a][1] < self.storage[b][1]

    def swap(self, index1, index2):
        self.storage[index1], self.storage[index2] = self.storage[index2], self.storage[index1]

    def peak(self):
        return self.storage[0]

    def size(self):
        return len(self.storage)


    def insert(self, value):
        self.storage.append(value)
        self.bubble_up(self.size() - 1)


    def bubble_up(self, index):
        if index < 1 or index >= self.size():
            return

        child_index = index

        if child_index % 2 == 0:
            parent_index = (child_index - 2) // 2
        else:
            parent_index = (child_index - 1) // 2

        while child_index > 0 and not self.compare(parent_index, child_index):
            self.swap(parent_index, child_index)

            child_index = parent_index
            if child_index % 2 == 0:
                parent_index = (child_index - 2) // 2
            else:
                parent_index = (child_index - 1) // 2


    def remove_peak(self):
        self.swap(0, self.size() - 1)
        to_return = self.storage.pop()
        self.bubble_down(0)
        return to_return


    def bubble_down(self, index):
        if index >= self.size():
            return

        parent_index = index
        child_index1 = 2 * parent_index + 1
        child_index2 = 2 * parent_index + 2

        if child_index1 >= self.size():
            return
        elif child_index2 >= self.size():
            master_child_index = child_index1
        elif self.compare(child_index1, child_index2):
            master_child_index = child_index1
        else:
            master_child_index = child_index2

        while parent_index < self.size() - 1 and not self.compare(parent_index, master_child_index):
            self.swap(parent_index, master_child_index)

            parent_index = master_child_index
            child_index1 = 2 * parent_index + 1
            child_index2 = 2 * parent_index + 2

            if child_index1 >= self.size():
                return
            elif child_index2 >= self.size():
                master_child_index = child_index1
            elif self.compare(child_index1, child_index2):
                master_child_index = child_index1
            else:
                master_child_index = child_index2

    def remove(self, value):
        for i in range(0, len(self.storage)):
              if self.storage[i] == value:
                  self.swap(i, self.size() - 1)
                  temp = self.storage.pop()
                  self.bubble_up(i)
                  self.bubble_down(i)
                  return temp
        return str(value) + ' does not exist'

    def heapify(self):
        counter = self.size() - 1
        while counter >= 0:
            self.bubble_down(counter)
            counter -= 1
        return self.storage


if __name__ == "__Heap__":
    Heap()