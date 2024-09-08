import { AnyExtension, BubbleMenuProps, UseEditorOptions } from "@tiptap/react"

/**
 * Interface for RichTextEditor component props
 */
export interface RichTextEditorProps {
    /** Content of the editor */
    content: string
    /** Extensions for the editor */
    extensions: AnyExtension[]
  
    /** Output format */
    output: 'html' | 'json' | 'text'
    /** Model value */
    modelValue?: string | object
    /** Dark mode flag */
    dark?: boolean
    /** Dense mode flag */
    dense?: boolean
    /** Disabled flag */
    disabled?: boolean
    /** Label for the editor */
    label?: string
    /** Hide toolbar flag */
    hideToolbar?: boolean
    /** Disable bubble menu flag */
    disableBubble?: boolean
    /** Hide bubble menu flag */
    hideBubble?: boolean
    /** Remove default wrapper flag */
    removeDefaultWrapper?: boolean
    /** Maximum width */
    maxWidth?: string | number
    /** Minimum height */
    minHeight?: string | number
    /** Maximum height */
    maxHeight?: string | number
    /** Editor class */
    editorClass?: string | string[] | Record<string, any>
    /** Content class */
    contentClass?: string | string[] | Record<string, any>
    /** Content change callback */
    onChangeContent?: (val: any) => void
    /** Bubble menu props */
    bubbleMenu?: BubbleMenuProps
  
    /** Use editor options */
    useEditorOptions?: UseEditorOptions
  }