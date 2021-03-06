﻿using CopaFilme.Application.Interfaces;
using CopaFilme.Application.Services;
using CopaFilme.Infra.Data.API;
using CopaFilme.Infra.Data.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;
using System.IO;

namespace CopaFilme.Services.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        private readonly string origin = "_origin";

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            RegisterServices(services);

            ConfigureCORS(services);

            ConfigureSwagger(services);

            services.AddApiVersioning();

        }

        private static void ConfigureSwagger(IServiceCollection services)
        {
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1.0", new Info
                {
                    Title = "API Copa Filme",
                    Description = "Documentação API Filme",
                    Version = "1.0.1"
                });

                var filePath = Path.Combine(System.AppContext.BaseDirectory, "CopaFilme.Services.API.xml");
                options.IncludeXmlComments(filePath);

            });
        }

        private void ConfigureCORS(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(origin, builder =>
                {
                    builder.AllowAnyOrigin();
                    builder.AllowAnyMethod();
                    builder.AllowAnyHeader();
                    builder.AllowCredentials();
                });
            });
        }

        private static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IFilmeService, FilmeService>();
            services.AddScoped<IFilmeAPI, FilmeAPI>();
            services.AddSingleton<IConfiguracao, Configuracao>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseCors(origin);
            app.UseMvc();

            app.UseSwagger();
            app.UseSwaggerUI(swagger =>
            {
                swagger.SwaggerEndpoint("/swagger/v1.0/swagger.json", "v 1.0");
            });
        }
    }
}
