import sys

# Increase recursion depth for deep trees
sys.setrecursionlimit(200000)

class HeavyLightDecomposition:
    def __init__(self, adj, weights=None):
        self.n = len(adj)
        self.adj = adj
        self.parent = [-1] * self.n
        self.depth = [0] * self.n
        self.heavy = [-1] * self.n
        self.head = [0] * self.n
        self.pos = [0] * self.n
        self.size = [0] * self.n
        self.cur_pos = 0
        
        # If weights are provided, we use them in the segment tree
        self.weights = weights if weights else [0] * self.n
        self.tree = [0] * (4 * self.n)

        self._dfs_size(0)
        self._dfs_hld(0, 0)
        self._build_segment_tree(1, 0, self.n - 1)

    def _dfs_size(self, u):
        self.size[u] = 1
        max_subtree_size = 0
        for v in self.adj[u]:
            if v != self.parent[u]:
                self.parent[v] = u
                self.depth[v] = self.depth[u] + 1
                self._dfs_size(v)
                self.size[u] += self.size[v]
                if self.size[v] > max_subtree_size:
                    max_subtree_size = self.size[v]
                    self.heavy[u] = v

    def _dfs_hld(self, u, h):
        self.head[u] = h
        self.pos[u] = self.cur_pos
        self.cur_pos += 1
        
        if self.heavy[u] != -1:
            self._dfs_hld(self.heavy[u], h)
            
        for v in self.adj[u]:
            if v != self.parent[u] and v != self.heavy[u]:
                self._dfs_hld(v, v)

    def _build_segment_tree(self, node, start, end):
        if start == end:
            # Map the original weight to the HLD position
            # This is a simplified version; in practice, you'd map node weights
            return
        mid = (start + end) // 2
        self._build_segment_tree(2 * node, start, mid)
        self._build_segment_tree(2 * node + 1, mid + 1, end)

    def update(self, node, start, end, idx, val):
        if start == end:
            self.tree[node] = val
            return
        mid = (start + end) // 2
        if idx <= mid:
            self.update(2 * node, start, mid, idx, val)
        else:
            self.update(2 * node + 1, mid + 1, end, idx, val)
        self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]

    def query(self, node, start, end, l, r):
        if r < start or end < l:
            return 0
        if l <= start and end <= r:
            return self.tree[node]
        mid = (start + end) // 2
        return self.query(2 * node, start, mid, l, r) + \
               self.query(2 * node + 1, mid + 1, end, l, r)

    def path_query(self, u, v):
        res = 0
        while self.head[u] != self.head[v]:
            if self.depth[self.head[u]] > self.depth[self.head[v]]:
                res += self.query(1, 0, self.n - 1, self.pos[self.head[u]], self.pos[u])
                u = self.parent[self.head[u]]
            else:
                res += self.query(1, 0, self.n - 1, self.pos[self.head[v]], self.pos[v])
                v = self.parent[self.head[v]]
        
        if self.depth[u] > self.depth[v]:
            u, v = v, u
        res += self.query(1, 0, self.n - 1, self.pos[u], self.pos[v])
        return res

# Example Usage
if __name__ == "__main__":
    # Tree structure: 0 -> 1, 0 -> 2, 1 -> 3, 1 -> 4
    adj = [[1, 2], [0, 3, 4], [0], [1], [1]]
    hld = HeavyLightDecomposition(adj)
    print("HLD initialized successfully.")
