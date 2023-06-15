export interface User {
  first_name: string
  last_name: string
  middle_name?: string
  is_active: boolean
  user_role: UserRole
  email?: string
  password?: string
  display_name?: string
  profile_image?: string
}

export interface UserRole {
  name: string
}
