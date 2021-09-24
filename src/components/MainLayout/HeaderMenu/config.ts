import { PAGE_NAMES } from '../../../store/AppState/types';


interface IPageItem {
  key: PAGE_NAMES,
  title: string,
  disable: boolean,
}

export const menuPages: Array<IPageItem> = [{
  key: PAGE_NAMES.EVENT_LIST,
  title: 'Список событий',
  disable: false,
},
{
  key: PAGE_NAMES.CREATE,
  title: 'Создать событие',
  disable: false,
}, {
  key: PAGE_NAMES.STATISTIC,
  title: 'Статистика событий',
  disable: true,
}];
