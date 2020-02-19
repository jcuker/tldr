import React, { useContext } from 'react';
import IArticle from './schema/article';
import { StyleSheet, View, Text, Image } from 'react-native';
import { IColors } from './constants';
import { AppStateContext } from './context/AppState';
import { getTimeStringFromDate, getDateStringFromDate } from './util/Date';

export interface IArticleCardProps {
    article: IArticle;
    style?: any;
}

export function ArticleCard(props: IArticleCardProps) {
    const colors: IColors = useContext(AppStateContext).colors;

    // Helper functions
    function renderTitle() {
        return (
            <View style={{
                ...style.articleTitleContainer,
                backgroundColor: colors.ArticleCardHeaderBackground
            }}>
                <Text style={style.articleTitle}>{props.article.title}</Text>
            </View>
        );
    }

    function renderContent() {
        const timeString: string = getTimeStringFromDate(props.article.publishDate);
        const dateString: string = getDateStringFromDate(props.article.publishDate);

        return (
            <View style={style.articleContentContainer}>
                <View style={style.articleLeftContainer}>
                    <Image style={style.articleThumbnail} source={{ uri: props.article.thumbnail }} resizeMethod="scale" />
                    <Text style={style.articleSource}>{props.article.source}</Text>
                    <View style={style.articleTimeContainer}>
                        <Text style={style.articlePublishTime}>{timeString}</Text>
                        <Text style={style.articlePublishDate}>{dateString}</Text>
                    </View>

                </View>
                <View style={style.articleRightContainer}>
                    <Text style={style.articleTextContent}>{props.article.body}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={{
            ...style.articleContainer,
            backgroundColor: colors.ArticleCardBackground,
            ...props.style
        }}>
            {renderTitle()}
            {renderContent()}
        </View>
    );
}

const style = StyleSheet.create({
    articleContainer: {
        display: 'flex',
        borderRadius: 5,
        height: 200,
        width: 300,
        overflow: 'hidden',
        flex: 1,
        margin: 15
    },
    articleTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: .15
    },
    articleTitle: {
        fontSize: 12
    },
    articleContentContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1
    },
    articleLeftContainer: {
        flex: .45,
        padding: 10
    },
    articleRightContainer: {
        flex: .55,
        padding: 10
    },
    articleThumbnail: {
        flex: .75,
        borderRadius: 5
    },
    articleSource: {
        fontSize: 10,
        marginLeft: 5
    },
    articleTimeContainer: {
        marginTop: 'auto'
    },
    articlePublishTime: {
        fontSize: 18
    },
    articlePublishDate: {
        fontSize: 12
    },
    articleTextContent: {
        fontSize: 12
    }
});