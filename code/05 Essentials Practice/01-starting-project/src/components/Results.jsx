import {calculateInvestmentResults, formatter} from '../util/investment';

export default function Results({investmentData}) {

    const results = calculateInvestmentResults(investmentData);


    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {results.map((result, index) => {
                const totalInterest =
                    result.valueEndOfYear -
                    result.annualInvestment * result.year -
                    investmentData.initialInvestment;

                const totalAmountInvested = result.valueEndOfYear - totalInterest;
                return (
                    <tr key={index}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                );
            })}

            </tbody>
        </table>
    );
}