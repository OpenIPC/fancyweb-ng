export type ComplexParagraph = {
  h: string,
  p: string,
  dl?: boolean,
  icon?: any 
}

export type ParagraphProps = {
  content: string | ComplexParagraph,
  size?: 'big' | 'normal' | 'small',
}
