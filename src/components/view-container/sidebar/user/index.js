//TODO
//作者排行榜页面
import styles from './user.module.scss';
import Image from 'next/image';
import avatar from '@/common/images/avatar.png';
// import icons from '@/common/styles/ionicons.scss';
function User() {
	return (
		<>
			<link
				rel="stylesheet"
				href="https://cdn.staticfile.org/ionicons/2.0.1/css/ionicons.min.css"
			/>
			<div className={styles.user}>
				<div className={styles.header}>🏅作者榜</div>
				<hr className={styles.split} />
				<a href="">
					<div className={styles.link}>
						<Image
							src={avatar}
							alt="avatar"
							className={styles.avatar}
						/>
						<div className={styles.details}>
							<p className={styles.name}>NEXTjs</p>
							<p className={styles.position}>
								The ReactFramework
							</p>
						</div>
					</div>
				</a>
				<a href="">
					<div className={styles.link}>
						<Image
							src={avatar}
							alt="avatar"
							className={styles.avatar}
						/>
						<div className={styles.details}>
							<p className={styles.name}>NEXTjs</p>
							<p className={styles.position}>
								The ReactFramework
							</p>
						</div>
					</div>
				</a>
				<a href="">
					<div className={styles.link}>
						<Image
							src={avatar}
							alt="avatar"
							className={styles.avatar}
						/>
						<div className={styles.details}>
							<p className={styles.name}>NEXTjs</p>
							<p className={styles.position}>
								The ReactFramework
							</p>
						</div>
					</div>
				</a>
				<hr className={styles.split} />
				<a href="">
					<div className={styles.more}>
						完整榜单&nbsp;&nbsp;<span>&gt;</span>
					</div>
				</a>
			</div>
		</>
	);
}
export default User;
