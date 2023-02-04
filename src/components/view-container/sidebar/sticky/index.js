//TODO
//掘金app二维码页面
import styles from './sticky.module.scss';
import Image from 'next/image';
import qrcode from '@/common/images/qrcode.png';
function Sticky() {
	return (
		<>
			<div className={styles.sticky}>
				<Image src={qrcode} alt="qrcode" className={styles.image} />
				<div className={styles.words}>
					<p className={styles.headline}>下载稀土掘金APP</p>
					<p className={styles.desc}>一个帮助开发者成长的社区</p>
				</div>
			</div>
		</>
	);
}
export default Sticky;
