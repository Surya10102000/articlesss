import "./styles.scss";

import { EditorContent, useEditor } from "@tiptap/react";
import { extensions } from "../utils/tiptap";
import { useEffect } from "react";
import Menubar from "@/components/Menubar";

const EditBlogPage = () => {
  // const [article, setArticle] = useState("");

  const editor = useEditor({
    extensions,
    content: "",
    autofocus: true,
    onUpdate: ({ editor }) => {
      const data = editor.getHTML();
      localStorage.setItem("tiptap", data);
    },
    
    editorProps: {
      attributes: {
        class: "m-2 focus:outline-none",
      },
    },
  });

  useEffect(() => {
    const data = localStorage.getItem("tiptap");
    editor?.commands?.setContent(data);
    console.log(data);
  }, [editor]);
  return (
    <div>
      EditBlogPage
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
export default EditBlogPage;
