export interface IMenuItem {
  name: string
  url: string
  icon: string
}

export const MENU_DATA: IMenuItem[] = [
  {
    icon: 'gis:location-man',
    name: 'Профиль',
    url: '/',
  },
  {
    icon: 'gis:earth-north',
    name: 'Путешествия',
    url: '/travels',
  },
  {
    icon: 'gis:search-poi',
    name: 'Поиск',
    url: '/search',
  },
  {
    icon: 'gis:map-book',
    name: 'Лента',
    url: '/feed',
  },
  {
    icon: 'gis:poi-info-o',
    name: 'Помощь',
    url: '/help',
  },
]