import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCallback } from "react";

const More = ({ editor }: any) => {
  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-medium">More</DropdownMenuTrigger>
      <DropdownMenuContent className="flex">
        <DropdownMenuItem>
          <input
            type="color"
            onInput={(event: any) =>
              editor.chain().focus().setColor(event.target.value).run()
            }
            value={editor.getAttributes("textStyle").color}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={addImage}>Set image</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default More;
