import React, { Component, Fragment } from 'react'


export default class App1 extends Component {

    render() {

        return (
            //DivFormPrtc.cardEXE()
            ModalPrtc.modalTest()
        )

    }

}



export class BoardEXE extends Component {
    btnPrtc = new ButtonPrtc();
    tblPrtc = new TablePrtc();
    render() {
        let elt = [];
        for (let i = 0; i < 10; i++) {
            elt.push(<h1>Board</h1>);
        }
        return (
            <div>
                {elt}
            </div>
        )
    }



}
export class DivFormPrtc extends Component {
    static container(source) {
        return (

            <div class="container pull-center" align="center">
                {source}
            </div>
        )
    }

    static panel(source) {
        return (
            <div class="panel col-8" style={{ marginTop: 50 }}>
                <div class="panel-heading btn-primary">
                    <p class="h2">Table 연습예제</p>

                </div>
                <div class="panel-body" style={{ marginTop: 30 }}>
                    {TablePrtc.tableTest()}

                </div>
                <div class="panel-footer">
                    {/* {ButtonPrtc.buttonTest()} */}

                </div>
            </div>
        )
    }

    static card(classes, data) {
        return (
            <div class={"card " + classes} style={data.style}>
                <div class="card-header">
                    {data.header}
                </div>
                <div class="card-body">
                    <h4 class="card-title">{data.title}</h4>
                    <p class="card-text">{data.text}</p>
                </div>
                {
                    data.component != null ?
                        <div class="card-footer text-muted">
                            {data.component}
                        </div> : ""
                }

            </div>
        )
    }
    static cardEXE() {
        const cardTheme = [
            { bg: "default", white: false },
            { bg: "primary", white: true },
            { bg: "success", white: true },
            { bg: "warning", white: false },
            { bg: "danger", white: true },
            { bg: "info", white: true },
            { bg: "light", white: false },
            { bg: "dark", white: true },
            { bg: "secondary", white: true },
        ];
        //let keys = [bg,white];
        let elt = [];

        cardTheme.forEach(e => {
            elt.push(DivFormPrtc.card("bg-" + e.bg + (e.white ? " text-white" : ""),
                {
                    title: "Card Title", text:
                        <span>
                            <p class="h6">this is card</p>
                            <small>{e.bg} theme</small>
                        </span>
                    , component: <a class={"btn border-white btn-" + e.bg} href="#">btn</a>,
                    header: "card-head",
                    style: { width: 200 }
                }))
        })



        return (

            <div id="card-collection" class="form-inline">

                {
                    elt
                }
            </div>
        )
    }

}

export class ButtonPrtc extends Component {

    static buttonEXE(btnClass, btnName) {
        return (
            <button class={"btn " + btnClass} type="submit">{btnName} </button>
        );
    }

    static buttonTest() {
        return (
            <div id="btnSample">
                <div id="btn-larges">
                    <h3>Btn-larges</h3>
                    <div>
                        {this.buttonEXE("btn-default btn-lg", "default")}
                        {this.buttonEXE("btn-primary btn-lg", "primary")}
                        {this.buttonEXE("btn-success btn-lg", "success")}
                        {this.buttonEXE("btn-info btn-lg", "info")}
                        {this.buttonEXE("btn-warning btn-lg", "warning")}
                        {this.buttonEXE("btn-danger btn-lg", "danger")}
                        {this.buttonEXE("btn-secondary btn-lg", "secondary")}
                    </div>

                    <div>
                        {this.buttonEXE("btn-outline-default btn-lg text-white", "default")}
                        {this.buttonEXE("btn-outline-primary btn-lg", "primary")}
                        {this.buttonEXE("btn-outline-success btn-lg", "success")}
                        {this.buttonEXE("btn-outline-info btn-lg", "info")}
                        {this.buttonEXE("btn-outline-warning btn-lg", "warning")}
                        {this.buttonEXE("btn-outline-danger btn-lg", "danger")}
                        {this.buttonEXE("btn-outline-secondary btn-lg", "secondary")}
                    </div>

                </div>

            </div>
        );
    }
}

export class TablePrtc extends Component {

    static tabledata = {
        headers: ["no", "name", "age", "ability"],
        datas: [
            {
                no: "01",
                name: "JOnathan JOestar",
                age: <p><span class="h5" style={{ color: "#5882FA" }}> 20 </span>d</p>,
                ability: "hamon"
            },
            {
                no: "02",
                name: "JOseph JOestar",
                age: <p>
                    <span class="h5" style={{ color: "#00FF00" }}> 18 </span> ->
                <span style={{ color: "#A901DB" }}>62</span> ->
                <span style={{ color: "##A4A4A4" }}>79</span></p>,
                ability: "hamon -> hamon+stand(hermit purple)"
            },
            {
                no: "03",
                name: "JOtaro kuJO",
                age: "17 -> 28 -> 30 -> 41",
                ability: "Star Platina"
            },
            {
                no: "04",
                name: "JOsuke higashikata",
                age: 16,
                ability: "Crazy Diamond"
            },
            {
                no: "05",
                name: "GIOrno GIOvanna",
                age: 15,
                ability: "Gold Experience"
            },
            {
                no: "06",
                name: "JOlyne kuJO",
                age: 18,
                ability: "Stone Free"
            },

        ]
    };
    static tableSetting() {
        let headerTemp = this.tabledata.headers;
        let dataTemp = this.tabledata.datas;
        this.tabledata.headers = headerTemp.map(str => <th>{str}</th>);
        this.tabledata.datas = dataTemp.map(data =>
            <tr>
                <td>{data.no}</td>
                <td class="h5">{data.name}</td>
                <td>{data.age}</td>
                <td>{data.ability}</td>
            </tr>
        );

    }

    static tableTest() {
        this.tableSetting();
        return (
            <table class="table table-bordered table-hover">
                <tbody>
                    {this.tabledata.datas}
                </tbody>
                <thead class="table-primary">
                    <tr>
                        {this.tabledata.headers}
                    </tr>
                </thead>
            </table>
        );
    }
}


export class ModalPrtc extends Component {
 

    static modalEXE(data) {
        let modalID = (data.modalID?data.modalID:"example")+"Modal"
        return (
            <Fragment>

                <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#"+modalID}>
                    {data.btnName}
                 </button>

                <div class="modal fade" id={modalID} tabindex="-1" role="dialog" aria-labelledby={modalID+"Label"} aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id={modalID+"Label"}>{data.modalTitle}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p class = "text-center h6"> {data.modalMsg} </p>
                                {
                                    data.page?data.page:<small class="text-right text-secondary">페이지 없음</small>
                                }
                            </div>
                            <div class="modal-footer">
                                {data.modalFooter?data.modalFooter:
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                }
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    static modalTest(){
       let data = {btnName:"모달 테스트", modalTitle : "여긴 타이틀", modalMsg : "여긴 메세지"};
       return this.modalEXE(data);
    }




}


export class DataPrtc extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(TablePrtc.tabledata.datas)}
            </div>
        );
    }
}
