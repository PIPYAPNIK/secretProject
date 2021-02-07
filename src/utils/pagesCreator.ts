export function createPages(pages: Array<number>, pagesCount: number, currentPage: number) {
  if (pagesCount > 6) {
    if (currentPage > 3) {
      for (let i = currentPage - 2; i <= currentPage + 3; i += 1) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 6; i += 1) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i += 1) {
      pages.push(i);
    }
  }
}
