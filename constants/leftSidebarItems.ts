interface ISidebarItem {
  text: string
  path: string
  icon: string
}

export const leftSidebarItems: ISidebarItem[] = [
  { text: 'Home', path: '/', icon: 'home' },
  { text: 'Tickets', path: '/tickets', icon: 'list' },
  { text: 'Profile', path: '/profile', icon: 'person' }
]
