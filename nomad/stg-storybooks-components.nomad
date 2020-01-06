# stg-storybooks-components nomad jobfile

job "stg-storybooks-components" {
  datacenters = [ "us-east-1" ]
  region      = "us-east-1"
  type = "service"

  constraint {
    attribute = "${node.class}"
    value     = "stg-devops-manhattan"
  }


  group "storybooks_components" {
    count = 1

    task "webserver" {
      driver = "docker"
      config {
        image = "docker.jampp.com/stg-storybooks-components:0.1"
        port_map = {
          entry_port = 6006
        }
      }

      service {
        port = "entry_port"
        name = "stg-storybooks-components"
        tags = [
          "traefik-stg.frontend.rule=Host:storybooks-preview.jampp.com",
          "traefik-stg.frontend.entrypoints=http-public"
        ]

        check {
          type     = "http"
          port     = "entry_port"
          path     = "/"
          interval = "10s"
          timeout  = "2s"
        }
      }

      resources {
        cpu = 256
        memory = 512
        network {
          port "entry_port" {
          }
        }
      }


    }

  }

}
