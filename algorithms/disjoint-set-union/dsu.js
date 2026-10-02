/**
 * Disjoint Set Union (DSU) / Union-Find Implementation
 * Optimized with Path Compression and Union by Rank.
 */
class DisjointSetUnion {
  constructor(n) {
    // parent[i] stores the parent of element i
    this.parent = new Array(n);
    // rank[i] stores the approximate height of the tree rooted at i
    this.rank = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  /**
   * Find the representative (root) of the set containing element i.
   * Implements Path Compression.
   */
  find(i) {
    if (this.parent[i] === i) {
      return i;
    }
    // Path Compression: update parent to the root found recursively
    this.parent[i] = this.find(this.parent[i]);
    return this.parent[i];
  }

  /**
   * Unites the sets containing elements i and j.
   * Implements Union by Rank.
   */
  union(i, j) {
    let rootI = this.find(i);
    let rootJ = this.find(j);

    if (rootI !== rootJ) {
      // Union by Rank: attach the shorter tree to the taller tree
      if (this.rank[rootI] < this.rank[rootJ]) {
        this.parent[rootI] = rootJ;
      } else if (this.rank[rootI] > this.rank[rootJ]) {
        this.parent[rootJ] = rootI;
      } else {
        this.parent[rootI] = rootJ;
        this.rank[rootJ]++;
      }
      return true; // Successfully united
    }
    return false; // Already in the same set
  }

  /**
   * Checks if two elements belong to the same set.
   */
  connected(i, j) {
    return this.find(i) === this.find(j);
  }
}

// --- Test Cases ---
const dsu = new DisjointSetUnion(10);
dsu.union(1, 2);
dsu.union(2, 3);
dsu.union(4, 5);
dsu.union(6, 7);
dsu.union(5, 6);

console.log(`Are 1 and 3 connected? ${dsu.connected(1, 3)}`); // true
console.log(`Are 4 and 7 connected? ${dsu.connected(4, 7)}`); // true
console.log(`Are 1 and 4 connected? ${dsu.connected(1, 4)}`); // false

module.exports = DisjointSetUnion;
