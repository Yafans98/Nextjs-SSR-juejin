//sidebar容器
import styles from './sidebar.module.scss';
import Banner from './banner';
import Sticky from './sticky';
import User from './user';
function SidebarContainer() {
	return (
		<>
			<div className={styles['sidebar-container']}>
				<Banner />
				<Sticky />
				<User />
			</div>
		</>
	);
}

export default SidebarContainer;
