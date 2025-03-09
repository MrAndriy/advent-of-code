// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
// The following are some examples of how this class is used:

// let helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4)
// helper.pageCount() // should == 2
// helper.itemCount() // should == 6
// helper.pageItemCount(0) // should == 4
// helper.pageItemCount(1) // last page - should == 2
// helper.pageItemCount(2) // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5) // should == 1 (zero based index)
// helper.pageIndex(2) // should == 0
// helper.pageIndex(20) // should == -1
// helper.pageIndex(-10) // should == -1

export class PaginationHelper {
  constructor(private collection: number[], private itemsPerPage: number) {}

  /**
   * returns the number of items within the entire collection
   * @returns {number} the number of items within the entire collection
   */
  itemCount() {
    return this.collection.length;
  }

  /**
   * returns the number of pages
   * @returns {number} the number of pages
   */
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  /**
   * method return -1 for pageIndex values that are out of range
   * @param {number} pageIndex - the index of the page to get the item count for
   * @returns {number} number of items on the current page. page_index is zero based.
   */
  pageItemCount(pageIndex: number) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    }

    // Calculate the number of items on the current page
    if (pageIndex === this.pageCount() - 1) {
      return this.itemCount() % this.itemsPerPage || this.itemsPerPage;
    }

    return this.itemsPerPage;
  }

  /**
   * returns the page index of the item
   * @param {number} itemIndex - the index of the item to get the page index for
   * @returns {number} the page index of the item
   */
  pageIndex(itemIndex: number) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    }
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
