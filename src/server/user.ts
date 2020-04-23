export async function unsetFavoriteAd(adId: number): Promise<boolean> {
    const answer = await fetch(`/user/favorite/${adId}`, {
        method: 'DELETE'
    }).then(response => {
        // Need to think how to determine if the action succeeded
        return response.status === 200;
    });

    return answer;
};

export async function setFavoriteAd(adId: number): Promise<boolean> {
    const answer = await fetch(`/user/favorite/${adId}`, {
        method: 'POST'
    }).then(response => {
        console.log(response)
        // Need to think how to determine if the action succeeded
        return response.status === 200;
    });

    return answer;
};