import { Controller, Get } from '@nestjs/common'
import { ApiOkResponse } from '@nestjs/swagger'

@Controller()
export class HealthzController {

  @ApiOkResponse()
  @Get('healthz')
  healthz(): unknown {
    return {}
  }
}
