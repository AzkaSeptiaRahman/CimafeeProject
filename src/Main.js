// Components
import MapLayout from './Components/maplayout';
import SideBar from './Components/sidebar';

// Style
import style from './style/Main.module.css'

export default function Main() {
  return (
    <div className={style.main} >
      <SideBar />
      <MapLayout />
    </div>
  );
}

