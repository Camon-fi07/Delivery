import { TextTags, TextType } from './text.types';

export const getTagByType = (type: TextType) => {
  switch (type) {
    case TextType.BIG_TITLE:
      return TextTags.H1;
    case TextType.TITLE || TextType.CARD_TITLE:
      return TextTags.H2;
    case TextType.SMALL_TITLE:
      return TextTags.H3;
    default:
      return TextTags.SPAN;
  }
};
