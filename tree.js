"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */

  // BC - empty array of children, the loop will not run
  sumValues() {
    let sum = this.val;

    for (let child of this.children) {
      sum += child.sumValues();
    }
    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */

  // BC - empty array of children,
  countEvens() {
    let countEvens = this.val % 2 === 0 ? 1 : 0;

    for (let child of this.children) {
      countEvens += child.countEvens();
    }

    return countEvens;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound) {
    let count = this.val > lowerBound ? 1 : 0;

    for (let child of this.children) {
      count += child.numGreater(lowerBound);
    }

    return count;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    let sum = this.root?.val;

    if (!this.root) return 0;
    for (let child of this.root?.children) {
      sum += child.sumValues();
    }
    return sum;
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if (!this.root) return 0;

    let countEvens = this.root.val % 2 === 0 ? 1 : 0;

    for (let child of this.root.children) {
      countEvens += child.countEvens();
    }

    return countEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    for (let child of this.root.children) {
      count += child.numGreater(lowerBound);
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
