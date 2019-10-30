import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import customAddNewsStyle from './add.less';

function NewsAdd() {
    const [ newsTitle, setNewsTitle ] = useState('');
    const [ newsContent, setNewsContent ] = useState('');
    const [ newsTags, setNewsTags ] = useState('');

    function addNews() {
        // TODO Add new development
    }

    function goBackButton(event) {
        // eslint-disable-next-line no-restricted-globals
        history.back();
        event.preventDefault();
    }

    return (
        <>
            <div className={customAddNewsStyle.container}>
                <NavLink key="0" to="/news/" onClick={goBackButton}>
                        Geri Dön
                </NavLink>
                <div className={customAddNewsStyle.form}>
                    <h3>Haber Ekle</h3>
                    <div className={customAddNewsStyle.field}>
                        <p>Haber Başlığı</p>
                        <textarea
                            onChange={e => setNewsTitle(e.target.value)}
                            className={customAddNewsStyle.newsTitle}
                            cols={40}
                            rows={3}
                        />
                    </div>
                    <div className={customAddNewsStyle.field}>
                        <p>Haber İçeriği</p>
                        <textarea
                            onChange={e => setNewsContent(e.target.value)}
                            className={customAddNewsStyle.newsContent}
                            cols={40}
                            rows={10}
                        />
                    </div>
                    <div className={customAddNewsStyle.field}>
                        <p>Haber Etiketleri</p>
                        <textarea
                            className={customAddNewsStyle.tags}
                            cols={40}
                            rows={5}
                            onChange={e => setNewsTags(e.target.value)}
                        />
                    </div>
                </div>
                <div className={customAddNewsStyle.button}>
                    <button type="submit" onClick={addNews}>Ekle</button>
                </div>
                <div>
                    {`'${newsTitle}','${newsContent}','${newsTags}'`}
                </div>
            </div>
        </>
    );
}

export {
    NewsAdd as default,
};
