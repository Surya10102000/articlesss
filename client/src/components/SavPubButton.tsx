import { Button } from "./ui/button"

const SavPubButton = ({editor} : any) => {
    const handleSaveButton = () => {
        console.log(editor?.getHTML())
      };
  return (
    <div className="absolute right-0 bottom-0 space-x-1 bg-inherit">
        <Button size='sm' variant='secondary' onClick={handleSaveButton}>Save</Button>
        <Button size='sm'>Publish</Button>
      </div>
  )
}
export default SavPubButton   