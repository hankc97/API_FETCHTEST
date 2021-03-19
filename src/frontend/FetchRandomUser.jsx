import React from 'react'
import { clientId, accessToken }from '../secrets'

export default class FetchRandomUser extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            stock: null,
        }
    }

    async componentDidMount() {
        const url = new URL("https://api.tdameritrade.com/v1/marketdata/SPY/pricehistory");
        const payload = {
            "apikey": clientId,
            "endDate": "1615003890000",
            "startDate": "1614571890000",
            "Authorization": accessToken,
        }

        url.search = new URLSearchParams(payload).toString();
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
    }


    render() {
        return (
            <div>
                h
                {/* {
                    this.state.loading || !this.state.person ? <div>loading...</div> :
                    <div>
                        <div>{this.state.person.name.first}</div>
                        <div>{this.state.person.name.last}</div>
                    </div>
                } */}
            </div>
        )
    }
}