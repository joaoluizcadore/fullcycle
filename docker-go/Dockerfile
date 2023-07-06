FROM tinygo/tinygo:latest AS builder

USER root
COPY ./app/ /app/
WORKDIR /app

RUN apt-get update && \
  apt-get install build-essential cmake libucl-dev libz-dev git -y

RUN git clone --recursive -b devel https://github.com/upx/upx
RUN make -C upx all  
RUN tinygo build -o fullcycle-desafio-go
RUN ./upx/build/release/upx ./fullcycle-desafio-go 

FROM busybox:uclibc
COPY --from=builder /app/fullcycle-desafio-go /app/
ENTRYPOINT [ "/app/fullcycle-desafio-go" ]
