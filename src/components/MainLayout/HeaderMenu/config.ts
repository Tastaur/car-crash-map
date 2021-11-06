import { PAGE_NAMES } from 'globalConstants';


interface IPageItem {
  key: PAGE_NAMES,
  title: string,
}

export const menuPages: Array<IPageItem> = [{
  key: PAGE_NAMES.EVENT_LIST,
  title: 'Список событий',
},
{
  key: PAGE_NAMES.CREATE,
  title: 'Создать событие',

}, {
  key: PAGE_NAMES.STATISTIC,
  title: 'Статистика событий',
}];
