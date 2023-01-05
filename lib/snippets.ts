const snippets = [
  {
    code: 'def lang_callback(lang: Optional[str]):\n    if lang is None:\n        return\n    if not lang.isalpha() or len(lang) != 2:\n        typer.echo("Use a 2 letter language code, like: es")\n        raise typer.Abort()\n    lang = lang.lower()\n    return lang',
    source: "Fast API",
  },
  {
    code: "def complete_existing_lang(incomplete: str):\n    lang_path: Path\n    for lang_path in get_lang_paths():\n        if lang_path.is_dir() and lang_path.name.startswith(incomplete):\n            yield lang_path.name",
    source: "Fast API",
  },
  {
    code: '@app.command()\ndef generate_readme():\n    typer.echo("Generating README")\n    readme_path = Path("README.md")\n    new_content = generate_readme_content()\n    readme_path.write_text(new_content, encoding="utf-8")',
    source: "Fast API",
  },
  {
    code: 'def update_single_lang(lang: str):\n    lang_path = docs_path / lang\n    typer.echo(f"Updating {lang_path.name}")\n    update_config(lang_path.name)',
    source: "Fast API",
  },
  {
    code: 'def get_text_with_translate_missing(text: str) -> str:\n    lines = text.splitlines()\n    lines.insert(1, missing_translation_snippet)\n    new_text = "\n".join(lines)\n    return new_text',
    source: "Fast API",
  },
  {
    code: "class RequestValidationError(ValidationError):\n    def __init__(self, errors: Sequence[ErrorList], *, body: Any = None) -> None:\n        self.body = body\n        super().__init__(errors, RequestErrorModel)",
    source: "Fast API",
  },
  {
    code: "class HTTPException(StarletteHTTPException):\n    def __init__(\n        self,\n        status_code: int,\n        detail: Any = None,\n        headers: Optional[Dict[str, Any]] = None,\n    ) -> None:\n        super().__init__(status_code=status_code, detail=detail, headers=headers)",
    source: "Fast API",
  },
  {
    code: 'def generate_unique_id(route: "APIRoute") -> str:\n    operation_id = route.name + route.path_format\n    operation_id = operation_id + "_" + list(route.methods)[0].lower()\n    return operation_id',
    source: "Fast API",
  },
  {
    code: '@app.get("/query/param")\ndef get_query_param(query=Query(default=None)):\n    if query is None:\n        return "foo bar"\n    return f"foo bar {query}"',
    source: "Fast API",
  },
  {
    code: '@app.get("/query/int/optional")\ndef get_query_type_optional(query: Optional[int] = None):\n    if query is None:\n        return "foo bar"\n    return f"foo bar {query}"',
    source: "Fast API",
  },
  {
    code: '@app.get("/query/optional")\ndef get_query_optional(query=None):\n    if query is None:\n        return "foo bar"\n    return f"foo bar {query}"',
    source: "Fast API",
  },
  {
    code: 'def test_multi_query_incorrect():\n    response = client.get("/items/?q=five&q=six")\n    assert response.status_code == 422, response.text\n    assert response.json() == multiple_errors',
    source: "Fast API",
  },
  {
    code: 'def test_multi_query():\n    response = client.get("/items/?q=5&q=6")\n    assert response.status_code == 200, response.text\n    assert response.json() == {"q": [5, 6]}',
    source: "Fast API",
  },
  {
    code: 'def test_get_route():\n    response = client.get("/")\n    assert response.status_code == 200, response.text\n    assert response.json() == {}',
    source: "Fast API",
  },
  {
    code: 'def test_strings_in_generated_swagger():\n    sig = inspect.signature(get_swagger_ui_html)\n    swagger_js_url = sig.parameters.get("swagger_js_url").default\n    html = get_swagger_ui_html(openapi_url="/docs", title="title")',
    source: "Fast API",
  },
  {
    code: 'def test_swagger_ui_oauth2_redirect():\n    response = client.get("/docs/oauth2-redirect")\n    assert response.status_code == 200, response.text\n    assert response.headers["content-type"] == "text/html; charset=utf-8"\n    assert "window.opener.swaggerUIRedirectOauth2" in response.text',
    source: "Fast API",
  },
  {
    code: 'def test_enum_status_code_response():\n    response = client.get("/enum-status-code")\n    assert response.status_code == 201, response.text\n    assert response.json() == "foo bar"',
    source: "Fast API",
  },
  {
    code: "app = self.router\n        for cls, options in reversed(middleware):\n            app = cls(app=app, **options)\n        return app",
    source: "Fast API",
  },
  {
    code: 'def setup(self) -> None:\n        if self.openapi_url:\n            urls = (server_data.get("url") for server_data in self.servers)\n            server_urls = {url for url in urls if url}',
    source: "Fast API",
  },
  {
    code: ' async def __call__(self, scope: Scope, receive: Receive, send: Send) -> None:\n        if self.root_path:\n            scope["root_path"] = self.root_path\n        await super().__call__(scope, receive, send)',
    source: "Fast API",
  },
  {
    code: "try:\n        yield await run_in_threadpool(cm.__enter__)\n    except Exception as e:\n        ok = bool(\n            await anyio.to_thread.run_sync(\n                cm.__exit__, type(e), e, None, limiter=exit_limiter\n            )\n        )",
    source: "Fast API",
  },
  {
    code: '@classmethod\n    def __modify_schema__(cls, field_schema: Dict[str, Any]) -> None:\n        field_schema.update({"type": "string", "format": "binary"})',
    source: "Fast API",
  },
  {
    code: '@classmethod\n    def validate(cls: Type["UploadFile"], v: Any) -> Any:\n        if not isinstance(v, StarletteUploadFile):\n            raise ValueError(f"Expected UploadFile, received: {type(v)}")\n        return v',
    source: "Fast API",
  },
  {
    code: 'async def request_validation_exception_handler(\n    request: Request, exc: RequestValidationError\n) -> JSONResponse:\n    return JSONResponse(\n        status_code=HTTP_422_UNPROCESSABLE_ENTITY,\n        content={"detail": jsonable_encoder(exc.errors())},\n    )',
    source: "Fast API",
  },
  {
    code: "path_params: Optional[List[ModelField]] = None,\n        query_params: Optional[List[ModelField]] = None,\n        header_params: Optional[List[ModelField]] = None,",
    source: "Fast API",
  },
  {
    code: "sequence_types = (list, set, tuple)\nsequence_shape_to_type = {\n    SHAPE_LIST: list,\n    SHAPE_SET: set,\n    SHAPE_TUPLE: tuple,\n    SHAPE_SEQUENCE: list,\n    SHAPE_TUPLE_ELLIPSIS: list,\n}",
    source: "Fast API",
  },
  {
    code: "except ImportError:\n            logger.error(multipart_not_installed_error)\n            raise RuntimeError(multipart_not_installed_error) from None",
    source: "Fast API",
  },
  {
    code: "if isinstance(depends, params.Security):\n        dependency_scopes = depends.scopes\n        security_scopes.extend(dependency_scopes)",
    source: "Fast API",
  },
  {
    code: "sub_dependant = get_dependant(\n        path=path,\n        call=dependency,\n        name=name,\n        security_scopes=security_scopes,\n        use_cache=depends.use_cache,\n    )",
    source: "Fast API",
  },
  {
    code: "if inspect.isroutine(call):\n        return inspect.iscoroutinefunction(call)\n    if inspect.isclass(call):\n        return False",
    source: "Fast API",
  },
  {
    code: 'final_field = create_response_field(\n        name="body",\n        type_=BodyModel,\n        required=required,\n        alias="body",\n        field_info=BodyFieldInfo(**BodyFieldInfo_kwargs),\n    )',
    source: "Fast API",
  },
  {
    code: 'class Contact(BaseModel):\n    name: Optional[str] = None\n    url: Optional[AnyUrl] = None\n    email: Optional[EmailStr] = None\n\n    class Config:\n        extra = "allow"',
    source: "Fast API",
  },
  {
    code: 'class License(BaseModel):\n    name: str\n    url: Optional[AnyUrl] = None\n\n    class Config:\n        extra = "allow"',
    source: "Fast API",
  },
  {
    code: 'class ServerVariable(BaseModel):\n    enum: Optional[List[str]] = None\n    default: str\n    description: Optional[str] = None\n\n    class Config:\n        extra = "allow"',
    source: "Fast API",
  },
  {
    code: 'class XML(BaseModel):\n    name: Optional[str] = None\n    namespace: Optional[str] = None\n    prefix: Optional[str] = None\n\n    class Config:\n        extra = "allow"',
    source: "Fast API",
  },
  {
    code: 'class Example(BaseModel):\n    summary: Optional[str] = None\n    description: Optional[str] = None\n    value: Optional[Any] = None\n    externalValue: Optional[AnyUrl] = None\n\n    class Config:\n        extra = "allow"',
    source: "Fast API",
  },
  {
    code: "example: Optional[Any] = None\n    examples: Optional[Dict[str, Union[Example, Reference]]] = None\n    encoding: Optional[Dict[str, Encoding]] = None",
    source: "Fast API",
  },
  {
    code: 'class RequestBody(BaseModel):\n    description: Optional[str] = None\n    content: Dict[str, MediaType]\n    required: Optional[bool] = None\n\n    class Config:\n        extra = "allow"',
    source: "Fast API",
  },
  {
    code: 'class SecurityBase(BaseModel):\n    type_: SecuritySchemeType = Field(alias="type")\n    description: Optional[str] = None\n\n    class Config:\n        extra = "allow"',
    source: "Fast API",
  },
  {
    code: 'class OAuthFlow(BaseModel):\n    refreshUrl: Optional[str] = None\n    scopes: Dict[str, str] = {}\n\n    class Config:\n        extra = "allow"',
    source: "Fast API",
  },
  {
    code: 'class Tag(BaseModel):\n    name: str\n    description: Optional[str] = None\n    externalDocs: Optional[ExternalDocumentation] = None\n\n    class Config:\n        extra = "allow"',
    source: "Fast API",
  },
  {
    code: "Schema.update_forward_refs()\nOperation.update_forward_refs()\nEncoding.update_forward_refs()",
    source: "Fast API",
  },
  {
    code: 'if self.auto_error:\n                raise HTTPException(\n                    status_code=HTTP_401_UNAUTHORIZED,\n                    detail="Not authenticated",\n                    headers=unauthorized_headers,\n                )\n            else:\n                return None',
    source: "Fast API",
  },
  {
    code: 'if scheme.lower() != "digest":\n            raise HTTPException(\n                status_code=HTTP_403_FORBIDDEN,\n                detail="Invalid authentication credentials",\n            )',
    source: "Fast API",
  },
  {
    code: "super().__init__(\n            flows=flows,\n            scheme_name=scheme_name,\n            description=description,\n            auto_error=auto_error,\n        )",
    source: "Fast API",
  },
  {
    code: 'class SecurityScopes:\n    def __init__(self, scopes: Optional[List[str]] = None):\n        self.scopes = scopes or []\n        self.scope_str = " ".join(self.scopes)',
    source: "Fast API",
  },
  {
    code: "def iscoroutinefunction(func: t.Any) -> bool:\n        while inspect.ismethod(func):\n            func = func.__func__\n\n        while isinstance(func, functools.partial):\n            func = func.func\n\n        return inspect.iscoroutinefunction(func)",
    source: "Flask",
  },
  {
    code: '@send_file_max_age_default.setter\n    def send_file_max_age_default(self, value: t.Union[int, timedelta, None]) -> None:\n        import warnings\n\n        warnings.warn(\n            "Warning",\n            DeprecationWarning,\n            stacklevel=2,\n        )\n        self.config["SEND_FILE_MAX_AGE_DEFAULT"] = _make_timedelta(value)',
    source: "Flask",
  },
  {
    code: 'if server_name:\n            sn_host, _, sn_port = server_name.partition(":")\n\n        if not host:\n            if sn_host:\n                host = sn_host\n            else:\n                host = "127.0.0.1"',
    source: "Flask",
  },
  {
    code: 'if debug is not None:\n            self.debug = bool(debug)\n\n        server_name = self.config.get("SERVER_NAME")\n        sn_host = sn_port = None',
    source: "Flask",
  },
  {
    code: 'from flask.testing import FlaskClient\n            class CustomClient(FlaskClient):\n                def __init__(self, *args, **kwargs):\n                    self._authentication = kwargs.pop("authentication")\n                    super(CustomClient,self).__init__( *args, **kwargs)',
    source: "Flask",
  },
  {
    code: 'if port or port == 0:\n            port = int(port)\n        elif sn_port:\n            port = int(sn_port)\n        else:\n            port = 5000\n\n        options.setdefault("use_reloader", self.debug)\n        options.setdefault("use_debugger", self.debug)\n        options.setdefault("threaded", True)',
    source: "Flask",
  },
  {
    code: " def decorator(f: T_template_filter) -> T_template_filter:\n            self.add_template_filter(f, name=name)\n            return f\n\n        return decorator",
    source: "Flask",
  },
  {
    code: " @setupmethod\n    def shell_context_processor(\n        self, f: T_shell_context_processor\n    ) -> T_shell_context_processor:\n        self.shell_context_processors.append(f)\n        return f",
    source: "Flask",
  },
  {
    code: "for c in (code, None) if code is not None else (None,):\n            for name in names:\n                handler_map = self.error_handler_spec[name][c]\n\n                if not handler_map:\n                    continue",
    source: "Flask",
  },
  {
    code: "for cls in exc_class.__mro__:\n                    handler = handler_map.get(cls)\n\n                    if handler is not None:\n                        return handler",
    source: "Flask",
  },
  {
    code: "if isinstance(e, RoutingException):\n            return e\n\n        handler = self._find_error_handler(e)\n        if handler is None:\n            return e\n        return self.ensure_sync(handler)(e)",
    source: "Flask",
  },
  {
    code: "if (\n            trap_bad_request is None\n            and self.debug\n            and isinstance(e, BadRequestKeyError)\n        ):\n            return True\n\n        if trap_bad_request:\n            return isinstance(e, BadRequest)",
    source: "Flask",
  },
  {
    code: 'exc_info = sys.exc_info()\n        got_request_exception.send(self, exception=e)\n        propagate = self.config["PROPAGATE_EXCEPTIONS"]\n\n        if propagate is None:\n            propagate = self.testing or self.debug',
    source: "Flask",
  },
  {
    code: 'if (\n            not self.debug\n            or not isinstance(request.routing_exception, RequestRedirect)\n            or request.routing_exception.code in {307, 308}\n            or request.method in {"GET", "HEAD", "OPTIONS"}\n        ):\n            raise request.routing_exception',
    source: "Flask",
  },
  {
    code: " try:\n            request_started.send(self)\n            rv = self.preprocess_request()\n            if rv is None:\n                rv = self.dispatch_request()\n        except Exception as e:\n            rv = self.handle_user_exception(e)",
    source: "Flask",
  },
  {
    code: "if not self._got_first_request:\n            with self._before_request_lock:\n                if not self._got_first_request:\n                    for func in self.before_first_request_funcs:\n                        self.ensure_sync(func)()\n\n                    self._got_first_request = True",
    source: "Flask",
  },
  {
    code: "def make_default_options_response(self) -> Response:   \n        adapter = request_ctx.url_adapter\n        methods = adapter.allowed_methods()\n        rv = self.response_class()\n        rv.allow.update(methods)\n        return rv",
    source: "Flask",
  },
  {
    code: "def ensure_sync(self, func: t.Callable) -> t.Callable:\n        if iscoroutinefunction(func):\n            return self.async_to_sync(func)\n\n        return func",
    source: "Flask",
  },
  {
    code: 'if req_ctx is not None:\n            url_adapter = req_ctx.url_adapter\n            blueprint_name = req_ctx.request.blueprint\n\n            if endpoint[:1] == ".":\n                if blueprint_name is not None:\n                    endpoint = f"{blueprint_name}{endpoint}"\n                else:\n                    endpoint = endpoint[1:]',
    source: "Flask",
  },
  {
    code: 'if self.config["SERVER_NAME"] is not None:\n            return self.url_map.bind(\n                self.config["SERVER_NAME"],\n                script_name=self.config["APPLICATION_ROOT"],\n                url_scheme=self.config["PREFERRED_URL_SCHEME"],\n            )',
    source: "Flask",
  },
  {
    code: 'if "." in endpoint:\n            names = chain(\n                names, reversed(_split_blueprint_path(endpoint.rpartition(".")[0]))\n            )\n\n        for name in names:\n            if name in self.url_default_functions:\n                for func in self.url_default_functions[name]:\n                    func(endpoint, values)',
    source: "Flask",
  },
  {
    code: "for handler in self.url_build_error_handlers:\n            try:\n                rv = handler(error, endpoint, values)\n            except BuildError as e:\n                # make error available outside except block\n                error = e\n            else:\n                if rv is not None:\n                    return rv",
    source: "Flask",
  },
  {
    code: "for name in names:\n            if name in self.url_value_preprocessors:\n                for url_func in self.url_value_preprocessors[name]:\n                    url_func(request.endpoint, request.view_args)",
    source: "Flask",
  },
  {
    code: "for name in names:\n            if name in self.before_request_funcs:\n                for before_func in self.before_request_funcs[name]:\n                    rv = self.ensure_sync(before_func)()\n\n                    if rv is not None:\n                        return rv",
    source: "Flask",
  },
  {
    code: "for func in ctx._after_request_functions:\n            response = self.ensure_sync(func)(response)\n\n        for name in chain(request.blueprints, (None,)):\n            if name in self.after_request_funcs:\n                for func in reversed(self.after_request_funcs[name]):\n                    response = self.ensure_sync(func)(response)",
    source: "Flask",
  },
  {
    code: "if exc is _sentinel:\n            exc = sys.exc_info()[1]\n\n        for name in chain(request.blueprints, (None,)):\n            if name in self.teardown_request_funcs:\n                for func in reversed(self.teardown_request_funcs[name]):\n                    self.ensure_sync(func)(exc)",
    source: "Flask",
  },
  {
    code: "try:\n      ctx.push()\n      response = self.full_dispatch_request()\n    except Exception as e:\n      error = e\n      response = self.handle_exception(e)\n    except:  # noqa: B001\n      error = sys.exc_info()[1]\n      raise\n    return response(environ, start_response)",
    source: "Flask",
  },
  {
    code: "class _FakeStack:\n    def __init__(self, name: str, cv: ContextVar[t.Any]) -> None:\n        self.name = name\n        self.cv = cv\n\n    def _warn(self):\n        import warnings",
    source: "Flask",
  },
  {
    code: "def push(self, obj: t.Any) -> None:\n        self._warn()\n        self.cv.set(obj)\n\n    def pop(self) -> t.Any:\n        self._warn()\n        ctx = self.cv.get(None)\n        self.cv.set(None)\n        return ctx",
    source: "Flask",
  },
  {
    code: 'if base_url is None:\n      http_host = app.config.get("SERVER_NAME") or "localhost"\n      app_root = app.config["APPLICATION_ROOT"]\n\n      if subdomain:\n        http_host = f"{subdomain}.{http_host}"',
    source: "Flask",
  },
  {
    code: "def __init__(self, *args: t.Any, **kwargs: t.Any) -> None:\n        super().__init__(*args, **kwargs)\n        self.preserve_context = False\n        self._new_contexts: t.List[t.ContextManager[t.Any]] = []\n        self._context_stack = ExitStack()",
    source: "Flask",
  },
  {
    code: " if isinstance(args[0], werkzeug.test.EnvironBuilder):\n        builder = copy(args[0])\n        builder.environ_base = self._copy_environ(builder.environ_base or {})\n        request = builder.get_request()\n    elif isinstance(args[0], dict):\n        request = EnvironBuilder.from_environ(\n            args[0], app=self.application, environ_base=self._copy_environ({})\n        ).get_request()",
    source: "Flask",
  },
  {
    code: "self._context_stack.close()\n\n        response = super().open(\n            request,\n            buffered=buffered,\n            follow_redirects=follow_redirects,\n        )\n        response.json_module = self.application.json",
    source: "Flask",
  },
  {
    code: " def __exit__(\n        self,\n        exc_type: t.Optional[type],\n        exc_value: t.Optional[BaseException],\n        tb: t.Optional[TracebackType],\n    ) -> None:\n        self.preserve_context = False\n        self._context_stack.close()",
    source: "Flask",
  },
  {
    code: 'if cli is None:\n            cli = self.app.cli \n\n        if "obj" not in kwargs:\n            kwargs["obj"] = ScriptInfo(create_app=lambda: self.app)\n\n        return super().invoke(cli, args, **kwargs)',
    source: "Flask",
  },
  {
    code: 'def send(self, *args: t.Any, **kwargs: t.Any) -> t.Any:\n            pass\n\n        def _fail(self, *args: t.Any, **kwargs: t.Any) -> t.Any:\n            raise RuntimeError(\n                "Signalling support is unavailable because the blinker"\n                " library is not installed."\n            ) from None',
    source: "Flask",
  },
  {
    code: "def __get__(self, obj: t.Any, owner: t.Any = None) -> t.Any:\n        if obj is None:\n            return self\n        rv = obj.config[self.__name__]\n        if self.get_converter is not None:\n            rv = self.get_converter(rv)\n        return rv",
    source: "Flask",
  },
  {
    code: '# Search for the most common names first.\n  for attr_name in ("app", "application"):\n        app = getattr(module, attr_name, None)\n\n        if isinstance(app, Flask):\n            return app\n\n    # Otherwise find the only object that is a Flask instance.\n    matches = [v for v in module.__dict__.values() if isinstance(v, Flask)]',
    source: "Flask",
  },
  {
    code: "try:\n        while tb is not None:\n            if tb.tb_frame.f_code is f.__code__:\n                return False\n\n            tb = tb.tb_next\n\n        return True\n    finally:\n        del tb",
    source: "Flask",
  },
  {
    code: 'try:\n        expr = ast.parse(app_name.strip(), mode="eval").body\n    except SyntaxError:\n        raise NoAppException(\n            f"Failed to parse {app_name!r} as an attribute name or function call."\n        ) from None',
    source: "Flask",
  },
  {
    code: 'while True:\n        path, name = os.path.split(path)\n        module_name.append(name)\n\n        if not os.path.exists(os.path.join(path, "__init__.py")):\n            break\n\n    if sys.path[0] != path:\n        sys.path.insert(0, path)',
    source: "Flask",
  },
  {
    code: "def get_version(ctx, param, value):\n    if not value or ctx.resilient_parsing:\n        return\n\n    import werkzeug\n    from . import __version__",
    source: "Flask",
  },
  {
    code: "@click.pass_context\n    def decorator(__ctx, *args, **kwargs):\n        if not current_app:\n            app = __ctx.ensure_object(ScriptInfo).load_app()\n            __ctx.with_resource(app.app_context())\n\n        return __ctx.invoke(f, *args, **kwargs)",
    source: "Flask",
  },
  {
    code: "def _set_app(ctx: click.Context, param: click.Option, value: str | None) -> str | None:\n    if value is None:\n        return None\n\n    info = ctx.ensure_object(ScriptInfo)\n    info.app_import_path = value\n    return value",
    source: "Flask",
  },
  {
    code: 'try:\n        importlib.import_module("dotenv")\n    except ImportError:\n        raise click.BadParameter(\n            "python-dotenv must be installed to load an env file.",\n            ctx=ctx,\n            param=param,\n        ) from None',
    source: "Flask",
  },
  {
    code: 'def _load_plugin_commands(self):\n        if self._loaded_plugin_commands:\n            return\n\n        if sys.version_info >= (3, 10):\n            from importlib import metadata\n        else:\n            import importlib_metadata as metadata\n\n        for ep in metadata.entry_points(group="flask.commands"):\n            self.add_command(ep.load(), ep.name)',
    source: "Flask",
  },
  {
    code: 'for name in (".env", ".flaskenv"):\n        path = dotenv.find_dotenv(name, usecwd=True)\n\n        if not path:\n            continue\n\n        dotenv.load_dotenv(path, encoding="utf-8")\n        loaded = True\n\n    return loaded ',
    source: "Flask",
  },
  {
    code: "def show_server_banner(debug, app_import_path):\n    if is_running_from_reloader():\n        return\n\n    if app_import_path is not None:\n        click.echo(f\" * Serving Flask app '{app_import_path}'\")\n\n    if debug is not None:\n        click.echo(f\" * Debug mode: {'on' if debug else 'off'}\")",
    source: "Flask",
  },
  {
    code: "if interactive_hook is not None:\n        try:\n            import readline\n            from rlcompleter import Completer\n        except ImportError:\n            pass\n        else:\n            readline.set_completer(Completer(ctx).complete)\n\n        interactive_hook()",
    source: "Flask",
  },
  {
    code: 'if sort in ("endpoint", "rule"):\n        rules = sorted(rules, key=attrgetter(sort))\n    elif sort == "methods":\n        rules = sorted(rules, key=lambda rule: sorted(rule.methods))  # type: ignore\n\n    rule_methods = [\n        ", ".join(sorted(rule.methods - ignored_methods))  # type: ignore\n        for rule in rules\n    ]',
    source: "Flask",
  },
  {
    code: 'headers = ("Endpoint", "Methods", "Rule")\n    widths = (\n        max(len(rule.endpoint) for rule in rules),\n        max(len(methods) for methods in rule_methods),\n        max(len(rule.rule) for rule in rules),\n    )\n    widths = [max(len(h), w) for h, w in zip(headers, widths)]\n    row = "{{0:<{0}}}  {{1:<{1}}}  {{2:<{2}}}".format(*widths)',
    source: "Flask",
  },
  {
    code: "def setupmethod(f: F) -> F:\n    f_name = f.__name__\n\n    def wrapper_func(self, *args: t.Any, **kwargs: t.Any) -> t.Any:\n        self._check_setup_finished(f_name)\n        return f(self, *args, **kwargs)\n\n    return t.cast(F, update_wrapper(wrapper_func, f))",
    source: "Flask",
  },
  {
    code: "def __init__(\n        self,\n        import_name: str,\n        static_folder: t.Optional[t.Union[str, os.PathLike]] = None,\n        static_url_path: t.Optional[str] = None,\n        template_folder: t.Optional[t.Union[str, os.PathLike]] = None,\n        root_path: t.Optional[str] = None,\n    ):",
    source: "Flask",
  },
  {
    code: '@static_folder.setter\n    def static_folder(self, value: t.Optional[t.Union[str, os.PathLike]]) -> None:\n        if value is not None:\n            value = os.fspath(value).rstrip(r"/")\n\n        self._static_folder = value',
    source: "Flask",
  },
];

export default function getSnippet() {
  return snippets[Math.floor(Math.random() * snippets.length)].code;
}
