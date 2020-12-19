import { Controller, Get } from '@nestjs/common'
import { ApiOkResponse } from '@nestjs/swagger'

@Controller()
export class HealthzController {

  @ApiOkResponse()
  @Get('healthz')
  healthz (): unknown {
    // TODO: Check not only presentation layer, but also all of layers after GCP setup is done.
    return {}
  }
}
