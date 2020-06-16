# Menunu
Menunu API & Frontend

## Issues
Create issues [here](https://github.com/jaspervriends/medialab-2-menunu/issues)

## Setup
Run:
```
docker-compose up
```

## Re-building/updating image
When you made changes to one of the docker (``docker-compose.yml`` or ``Dockerfile``) files, run the following command in the terminal:
```
docker-compose up --build
```

## Ports
- http://localhost:8080 -> API

## Symfony commands
- Debug Routes: ``docker-compose exec php bin/console debug:router``
- Create new entity: ``docker-compose exec php bin/console make:entity --api-resource``
- Update database schema: ``docker-compose exec php bin/console doctrine:schema:update --force``
- Update database schema with delete: ``docker-compose exec php bin/console doctrine:schema:update --complete --force``

## Mac users - Database does not start
- go to `/api/bin` and run ``chmod 755 console``