docker run -d --name redis redis
docker run -d -e DOCKER=true --name web -p 3000:3000 hn_history bash -lc "cd /app && bundle exec foreman start web"
docker run -d -e DOCKER=true --name resque --link redis:redis hn_history bash -lc "cd /app && bundle exec foreman start resque"
docker run -d -e DOCKER=true --name clock --link redis:redis hn_history bash -lc "cd /app && bundle exec foreman start clockwork"
docker run -d --name nginx -p 80:80 --link web:web nginx
