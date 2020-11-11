#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["Yatla.Server.Host/Yatla.Server.Host.csproj", "Yatla.Server.Host/"]
RUN dotnet restore "Yatla.Server.Host/Yatla.Server.Host.csproj"
COPY . .
WORKDIR "/src/Yatla.Server.Host"
RUN dotnet build "Yatla.Server.Host.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Yatla.Server.Host.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Yatla.Server.Host.dll"]