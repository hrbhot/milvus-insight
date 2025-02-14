export enum ALL_ROUTER_TYPES {
  // '/'
  OVERVIEW = 'overview',
  // '/collections'
  COLLECTIONS = 'collections',
  // '/collections/:collectionId'
  COLLECTION_DETAIL = 'collection_detail',
  // 'search'
  SEARCH = 'search',
}

export type NavInfo = {
  navTitle: string;
  backPath: string;
};

export type RouterConfigType = {
  path: string;
  component: () => JSX.Element;
  auth: boolean;
};
