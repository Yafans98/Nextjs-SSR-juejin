//TODO
//广告位页面
import styles from './banner.module.scss';
import Image from 'next/image';
import banner from '@/common/images/banner.png';
function Banner() {
	return (
		<>
			<div className={styles.banner}>
				<Image src={banner} alt="banner" className={styles.image} />
			</div>
		</>
	);
}
export default Banner;