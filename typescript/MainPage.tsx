import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ArticleCard } from "./ArticleCard";
import { AppStateContext, IAppState } from "./context/AppState";
import { getAppState } from "./util/Storage";
import IArticle from "./schema/article";
import { getArticles } from "./util/Networking";

export default function MainPage() {
    const [articles, setArticles] = useState<IArticle[] | any>([]);
    const colors = useContext(AppStateContext).colors;

    useEffect(() => {
        let _articles: IArticle[] = [];

        const fetchArticles = async () => {
            _articles = await getArticles();
            setArticles(_articles);
        }

        const s = async () => await new Promise(resolve => setTimeout(resolve, 2000))

        fetchArticles();
        s();
    }, []);

    return (
        <View style={{
            ...style.mainPage,
            backgroundColor: colors.MainPageBackground
        }}>
            <View style={style.articleListContainer}>
                <FlatList
                    data={articles}
                    keyExtractor={(item: IArticle, index: number) => '' + index}
                    renderItem={({ item }) => <ArticleCard article={item}/>}
                />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    articleListContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mainPage: {
        height: '100%',
        width: '100%'
    }
});