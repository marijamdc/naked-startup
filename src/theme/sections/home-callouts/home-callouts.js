import React from 'react';
import styles from './home-callouts.module.css';
import CalloutBox from "../../../components/callout-box/callout-box";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomeCallouts() {
    const callouts = [
        {
            title: 'Run an effective fundraising process',
            subtitle: 'Walk down this step by step guide to early stage startup fundraising.',
            urlText: 'Get started with fundraising',
            url: useBaseUrl('/docs/fundraising'),
        },
        {
            title: 'Discover product-market-fit',
            subtitle: 'Coming soon. Sign up on the waiting list.',
            urlText: 'Sign up',
            url: useBaseUrl('/docs/discovery'),
        }
    ]
    return (
        <div className="container">
            <div className={styles.homeCallouts}>
                {callouts.map((callout, i) => (
                    <div key={i} className={styles.homeCallouts__item}>
                        <CalloutBox title={callout.title} subtitle={callout.subtitle} url={callout.url} urlText={callout.urlText} />
                    </div>
                ))}
            </div>
        </div>
    );
}