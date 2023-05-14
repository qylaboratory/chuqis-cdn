import { HomeButton, HomePrimaryButton } from '../components/HomeButton'
import { Link, makeStyles } from '@fluentui/react-components';
import { Alert } from '@fluentui/react-components/unstable';
import '../styles/index.css'

const useStyles = makeStyles({
    // indexRoot: {
    //     maxWidth: '1280px',
    //     marginTop: 0,
    //     marginInline: 'auto',
    //     paddingBlock: '2rem',
    //     textAlign: 'center'
    // },
    title: {
        fontSize: '1.25rem',
    },
    name: {
        color: '#316ab7'
    },
    wrapper: {
      columnGap: '15px',
      display: 'flex'
    },
    footer: {
        marginTop: '15px'
    },
    footer_link: {
        marginLeft: '5px'
    }
});

export default function Home() {
    const styles = useStyles()
    return (
        <div>
            <div className={styles.title}>
                <h1>Hello,</h1>
                <h1>Here is <span className={styles.name}>Chuqis rustdesk</span>.</h1>
                <p>远程桌面软件，开箱即用，无需任何配置</p>
            </div>
            <div className={styles.wrapper}>
                <HomePrimaryButton link='https://chuqis.com'>
                    Website
                </HomePrimaryButton>
                <HomeButton link='rustdesk.chuqis.com'>
                    Host
                </HomeButton>
            </div>
            <footer className={styles.footer}>
                <span>
                    © 2023 - {new Date().getFullYear()} Redish101. All rights reserved.
                    <Link href='/#/privacy-policy' className={styles.footer_link}>Privacy Policy</Link>
                </span>
            </footer>
        </div>
    )
}
