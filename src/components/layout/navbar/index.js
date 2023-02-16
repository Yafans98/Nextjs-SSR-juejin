import styles from './nav.module.scss';
import logo from '@/common/images/logo.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react';
function Navbar({ categories }) {

  const [cate, setCate] = useState([]);
  const [read, SetRead] = useState([]);

  useEffect(() => {
    let arr = new Array(categories.length);
    let readArr = new Array(categories.length);
    //对返回数据按照id从小到大排序
    for (let item of categories) {
      arr[item.id - 1] = item;
      //判断是否有label,有的话就标记为未读
      if (typeof (item.attributes.label) === 'string') {
        readArr[item.id - 1] = false;
      }
      else {
        readArr[item.id - 1] = true;
      }
    }
    setCate(arr);
    SetRead(readArr);
  }, [])

  const handleClick = id => {
    SetRead(arr => {
      arr[id - 1] = true;
      //必须重新渲染，否则不会re-render
      return [...arr]
    })
  }
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles['nav-container']}>
          {/* Todo：全部做完将这里导航到首页 */}
          <a href="#" >
            <Image src={logo} alt='掘金Logo' className={styles.logo} />
          </a>
          <div className={styles['navlist-container']}>
            <ul className={styles.nav}>
              {cate.map((item, index) => {
                return (
                  <li key={item.id} >
                    <a href='#'>{item.attributes.name}</a>
                    {!read[item.id - 1] &&
                      (<span className={styles.label} onClick={() => handleClick(item.id)} >{item.attributes.label}</span>)
                    }
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar
