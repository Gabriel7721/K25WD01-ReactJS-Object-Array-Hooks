import "./App.css";
import LoginForm from "./components/01.Object/LoginForm";
import CreateList from "./components/02.Array/A.Create/CreateList";
import RemoveList from "./components/02.Array/B.Remove/RemoveList";
import UpdateList from "./components/02.Array/C.Update/UpdateList";
import CounterList from "./components/02.Array/D.Replace/CounterList";
import InsertList from "./components/02.Array/E.Insert/InsertList";
import PaintingListClone from "./components/02.Array/F.Reverse/PaintingListClone";
import PaintingListCloneAndOrigin from "./components/02.Array/F.Reverse/PaintingListCloneAndOrigin";
import BucketList from "./components/02.Array/G.MutateArrayItem/BucketList";

const App = () => {
  return (
    <div>
      {/* <LoginForm /> */}
      {/* <CreateList /> */}
      {/* <RemoveList /> */}
      {/* <UpdateList /> */}
      {/* <CounterList /> */}
      {/* <InsertList /> */}
      {/* <PaintingListClone /> */}
      {/* <PaintingListCloneAndOrigin /> */}
      <BucketList />
    </div>
  );
};

export default App;
