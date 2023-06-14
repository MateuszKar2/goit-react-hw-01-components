import { Profile } from './Profile/Profile';
// import { Statistics } from './Statistic/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';



export const App = () => {
  return (
  <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile title=""/>
      {/* <Statistics title=""/> */}
      <FriendList title=""/>
      <TransactionHistory title=""/>
    </div>
  );
};
