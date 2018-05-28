import React from 'react';
import { Pie, PieChart, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class ViewAnalysis extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let commonNVP;
        const commonTable = [];
        const globalPriority = [];
        const alternatives = this.props.entities.filter(e => e.type === 'alternative');
        const result = [];
        let error = false

        this.props.tables.map((table, i) => {
            if (table.nvp === null) error = true;
            if (i === 0) commonNVP = table.nvp;
            else commonTable.push(table.nvp);
        });

        // check on errors
        if (error) {
            this.props.history.push('/tables');
            return;
        }

        let pr = [];
        commonTable.map((row, ir) => {
            row.map((cell, ic) => {
                if (!pr[ic] || pr[ic].length === 0) {
                    pr[ic] = [];
                }

                pr[ic].push(cell * commonNVP[ir]);
            });
        });

        pr.map(p => {
            globalPriority.push(p.reduce((acc, val) => acc + val));
        });

        const length = globalPriority.length;
        for (let i = 0; i < length; i++) {
            result.push({
                name: alternatives[i].name,
                pv: globalPriority[i],
                value: globalPriority[i],
            });
        }

        this.analysis = result;
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <BarChart width={600} height={300} data={this.analysis}
                margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                </BarChart>
                <PieChart width={400} height={400}>
                    <Pie isAnimationActive={false} data={this.analysis} cx={200} cy={200} outerRadius={80} fill="#8884d8" dataKey="value" label/>
                    <Tooltip />
                </PieChart>
            </div>
        );
    }

}