export type Styles = {
  'active': string;
  'view': string;
  'viewAnime': string;
  'viewList': string;
  'viewListItem': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
