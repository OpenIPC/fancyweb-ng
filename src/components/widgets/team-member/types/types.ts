export type TeamMemberProps = {
  imgSrc?: string,
  name: string,
  bio: string,
  socials?: {
      link: string,
      icon: 'Github' | 'Telegram',
    }[],
}
