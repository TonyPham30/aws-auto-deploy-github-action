import {Handler, APIGatewayProxyEvent, APIGatewayProxyResultV2} from "aws-lambda"
import * as _ from "lodash"
export const handler: Handler =async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResultV2> => {
    const max = 10
    const val = _.random(max)
    const response = {
        status: 200,
        body: JSON.stringify("hello from lambda"+val)
    }
    return response
}