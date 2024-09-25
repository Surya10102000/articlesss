import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";

  type inputI = {
    currentPage : number, 
    totalPages : number ,
    onPageChange : any ,
  }
  
  export function PaginationDemo({ currentPage , totalPages, onPageChange } : inputI) {
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };
  
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };
  
    return (
      <Pagination>
        <PaginationContent>
          {/* Previous Page Button */}
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePreviousPage}
              href="#"
              aria-disabled={currentPage === 1} 
            />
          </PaginationItem>
  
          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={currentPage === index + 1}
                onClick={() => onPageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Ellipsis if needed */}
          {totalPages > 3 && <PaginationEllipsis />}
  
          {/* Next Page Button */}
          <PaginationItem>
            <PaginationNext
              onClick={handleNextPage}
              href="#"
              aria-disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }
  