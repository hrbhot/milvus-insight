import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { navContext } from '../context/Navigation';
import { ALL_ROUTER_TYPES, NavInfo } from '../router/Types';

export const useNavigationHook = (
  type: ALL_ROUTER_TYPES,
  extraParam?: {
    collectionName: string;
  }
) => {
  const { t: navTrans } = useTranslation('nav');
  const { setNavInfo } = useContext(navContext);
  const { collectionName } = extraParam || { collectionName: '' };

  useEffect(() => {
    switch (type) {
      case ALL_ROUTER_TYPES.OVERVIEW: {
        const navInfo: NavInfo = {
          navTitle: navTrans('overview'),
          backPath: '',
        };
        setNavInfo(navInfo);
        break;
      }
      case ALL_ROUTER_TYPES.COLLECTIONS: {
        const navInfo: NavInfo = {
          navTitle: navTrans('collection'),
          backPath: '',
        };
        setNavInfo(navInfo);
        break;
      }
      case ALL_ROUTER_TYPES.COLLECTION_DETAIL: {
        const navInfo: NavInfo = {
          navTitle: collectionName,
          backPath: '/collections',
        };
        setNavInfo(navInfo);
        break;
      }
      case ALL_ROUTER_TYPES.SEARCH: {
        const navInfo: NavInfo = {
          navTitle: navTrans('search'),
          backPath: '',
        };
        setNavInfo(navInfo);
        break;
      }
      default:
        break;
    }
  }, [type, navTrans, setNavInfo, collectionName]);
};
