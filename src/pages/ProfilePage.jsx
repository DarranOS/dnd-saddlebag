import { ProfileView } from 'views'
import { ProfileProvider } from 'contexts'
const ProfilePage = () => {
  return (
    <ProfileProvider>
      <ProfileView />
    </ProfileProvider>
  )
}

export default ProfilePage
// <ProfileProvider>
// </ProfileProvider>)
