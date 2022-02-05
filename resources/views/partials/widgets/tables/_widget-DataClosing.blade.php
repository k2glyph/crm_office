
									<!--begin::Tables Widget 9-->
									<div class="card card-xxl-stretch mb-5 mb-xl-8" >
										<!--begin::Header-->
										<div class="card-header border-0 pt-5">
											<h3 class="card-title align-items-start flex-column">
												<span class="card-label fw-bolder fs-3 mb-1">Lead Tunneling</span>
												<span class="text-muted mt-1 fw-bold fs-7"> Lead</span>
											</h3>
											<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
												<a href=/ld class="btn btn-sm btn-light btn-active-primary me-2" title="Click For Detail">
												<!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
												<span class="svg-icon svg-icon-3">
													<i class="fas fa-chart-line"></i>
												</span>
												<!--end::Svg Icon-->Detail</a>
												<form action="#" method="GET">
													<button type="submit" class="btn btn-sm btn-light btn-active-primary me-2" title="Click For Detail">
														<!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
														<span class="svg-icon svg-icon-3">
															<i class="las la-print" style="font-size: 18px"></i>
														</span>
														<!--end::Svg Icon-->Export</button>
												</form>
												<form action="/dashboard" method="GET" class="d-flex">
													<div class="me-2">
														<input class="form-control mt-0" name="date_filter"  id="date_filter" type="date" style="height: 33px;" onkeypress="submit()">
													</div>
												</form>

												{{-- <form action="#" method="GET" class="d-flex">
													<input class="form-control mt-0" name="search" id="searchlead" type="text" placeholder="Search" aria-label="Search" style="height: 33px;">
													<button class="btn mt-n2" type="submit" style="height: 30px;"><i class="fas fa-search fas-7x"></i></button>
												</form> --}}
											</div>
										</div>
										<!--end::Header-->
										<!--begin::Body-->
										<div class="card-body py-3">
											<!--begin::Table container-->
											<div class="table-responsive" id="myDIV">
												<!--begin::Table-->
												<table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4" id="leads">
													<!--begin::Table head-->
													<thead>
														<tr class="fw-medium text-muted">
															<th class=" text-center">No</th>
                                                            <th class=" text-center">Order ID</th>
															<th class=" text-center">Advertiser Name</th>
															<th class=" text-center">Operator Name</th>
															<th class=" text-center">Customer Name</th>
															<th class=" text-center">Whatsapp Customer</th>
															<th class=" text-center">Product Name</th>
															<th class=" text-center">Date/Time</th>
															<th class=" text-center">Lead Progress</th>
														</tr>
													</thead>
													<!--end::Table head-->
													<!--begin::Table body-->
													<tbody>
                                                        <?php
                                                            $n = 0;
                                                        ?>
                                                        @foreach ($leads as $lead)
														<tr>
															<td>
																<div class="d-flex align-items-center justify-content-center">
																	<h1 class="text-dark fw-normal fs-6">{{$n+=1}}</h1>
																</div>
															</td>
                                                            <td>
																<div class="d-flex align-items-center justify-content-center">
																	<h1 class="text-dark fw-normal fs-6">Ord-{{$lead['id']}}</h1>
																</div>
															</td>
															<td>
																<div class="d-flex align-items-center justify-content-center">
																	<h1 class="text-dark fw-normal fs-6">{{$lead['advertiser'] ?? ''}}</h1>
																</div>
															</td>
															<td>
																<div class="d-flex align-items-center justify-content-center">
																	<h1 class="text-dark fw-normal fs-6">{{$lead['operator']['name'] ?? ''}}</h1>
																</div>
															</td>
															<td>
																<div class="d-flex align-items-center justify-content-center">
																	<h1 class="text-primary fw-normal fs-6 text-hover-primary">{{$lead['customer']['name']}}</h1>
																</div>
															</td>
															<td>
																<div class="d-flex align-items-center justify-content-center">
																	{{--  <h1 class="text-dark fw-normal fs-6">{{$lead->client_wa}}</h1>  --}}
																	{{--  <a class="text-dark fw-normal fs-6 text-hover-primary" href="https://api.whatsapp.com/send/?phone={{$lead->no_wa}}&text={{ $lead->text }}">{{$lead->no_wa}}</a>  --}}
																	<a class="text-primary fw-normal fs-6 text-hover-primary" href="#">{{$lead['customer']['whatsapp']}}</a>
																</div>
															</td>
															<td>
																<div class="d-flex align-items-center justify-content-center">
																	<h1 class="text-dark fw-normal fs-6">{{$lead['product']['name']}}</h1>
																</div>
															</td>
															<td>
																<div class="d-flex align-items-center justify-content-center">
																	<h1 class="text-dark fw-normal fs-6">{{$lead['updated_at'] ?? ''}}</h1>
																</div>
															</td>
															<td>
																<div class="d-flex align-items-center justify-content-center">
                                                                    @if ($lead['status']['id'] == 6 || $lead['status']['id'] == 7)
                                                                        <h1 class="text-dark fw-normal fs-6 badge badge-light-danger">{{$lead['status']['name']}}</h1>
                                                                    @elseif ($lead['status']['id'] == 3)
                                                                        <h1 class="text-dark fw-normal fs-6 badge badge-light-primary">{{$lead['status']['name']}}</h1>
                                                                    @elseif ($lead['status']['id'] == 4)
                                                                        <h1 class="text-dark fw-normal fs-6 badge badge-light-info">{{$lead['status']['name']}}</h1>
                                                                    @else
                                                                        <h1 class="text-dark fw-normal fs-6 badge badge-light-success">{{$lead['status']['name']}}</h1>
                                                                    @endif
																</div>
															</td>
														</tr>
                                                        @endforeach
													</tbody>
													<!--end::Table body-->
												</table>
												<!--end::Table-->
											</div>
											<!--end::Table container-->
										</div>
									</div>
									<!--end::Tables Widget 9-->

