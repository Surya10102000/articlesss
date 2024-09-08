import { Icons } from "./icons";
import Tables from "./Tables";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Menubar = ({ editor }: any) => {
  const handleSaveButton = () => {
    console.log(editor?.getHTML())
  };

  if (!editor) {
    return null;
  }

  // const initialData = "INITIAL DATA";
  return (
    <Card className="sticky top-5  z-10 rounded-md grid grid-cols-8">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
      >
        <Icons.undo />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
      >
        <Icons.redo />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "isActive text-primary" : ""}
      >
        <strong>B</strong>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active text-primary" : ""}
      >
        <em>I</em>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active text-primary" : ""}
      >
        <s>S</s>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "is-active text-primary"
            : ""
        }
      >
        H1
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "is-active text-primary"
            : ""
        }
      >
        H2
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? "is-active text-primary"
            : ""
        }
      >
        H3
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive("heading", { level: 4 })
            ? "is-active text-primary"
            : ""
        }
      >
        H4
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive("heading", { level: 5 })
            ? "is-active text-primary"
            : ""
        }
      >
        H5
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active text-primary" : ""}
      >
        <Icons.code size={12} />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setParagraph().run()}
        disabled={false}
        className={editor.isActive("paragraph") ? "is-active text-primary" : ""}
      >
        <Icons.paragraph size={13} />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList") ? "is-active text-primary" : ""
        }
      >
        <Icons.ul size="15" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList") ? "is-active text-primary" : ""
        }
      >
        <Icons.ol size="15" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={
          editor.isActive({ textAlign: "left" }) ? "is-active text-primary" : ""
        }
      >
        <Icons.alignLeft size="15" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={
          editor.isActive({ textAlign: "center" })
            ? "is-active text-primary"
            : ""
        }
      >
        <Icons.alignCenter size="15" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={
          editor.isActive({ textAlign: "right" })
            ? "is-active text-primary"
            : ""
        }
      >
        <Icons.alignRight size="15" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={
          editor.isActive({ textAlign: "justify" })
            ? "is-active text-primary"
            : ""
        }
      >
        <Icons.alignJustify size="15" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive("highlight") ? "is-active text-primary" : ""}
      >
        {/* highlight */}
        <Icons.bg size="15" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active text-primary" : ""}
      >
        {/* codeBlock */}
        <Icons.codeblock size="15" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive("blockquote") ? "is-active text-primary" : ""
        }
      >
        {/* blockquote */}
        <Icons.blockquote size="15" />
      </Button>

      <Tables editor={editor}/>

      <div className="absolute right-0 bottom-0  ">
        <Button size='sm' variant='secondary' onClick={handleSaveButton}>Save</Button>
        <Button size='sm'>Publish</Button>
      </div>
      
    </Card>
  );
};
export default Menubar;
